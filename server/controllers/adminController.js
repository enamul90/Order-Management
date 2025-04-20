import bcrypt from "bcrypt"
import validator from 'validator'

import Admin from "../models/adminModel.js"
import TokenAndCookie from "../utils/TokenAndCookie.js"
import random from 'r-password'
import { Mail } from "../utils/mail.js";
import { OtpMail, PasswordResetSuccess } from "../utils/mailTemplate.js";
import Business from "../models/businessMode.js"

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).json({
                message: "All fields are required",
            });
        }

        if (email == "" || password == "") {
            return res.status(400).json({
                message: "Fields cannot be empty",
            });
        }

        const findUser = await Admin.findOne({ email: email });

        if (!findUser) {
            return res.status(404).json({
                message: "There is no account associated with this email address.",
            });
        }

        const MatchPassword = await bcrypt.compare(password, findUser.password);
        if (!MatchPassword) {
            return res.status(400).json({
                message: "Incorrect password. Please try again.",
            });
        }

        await TokenAndCookie(findUser._id, res);

        const BusinessFind = await Business.findOne({ userId: findUser._id })
        if (!BusinessFind) {
            await Business.create({
                userId: findUser._id,
            })
        }

        return res.status(200).json({
            message: "Login successful",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while processing your request.",
        });
    }
};

export const Logout = async (req, res) => {
    try {
        res.cookie("token", "", {
            maxAge: 0,
            httpOnly: true,
            sameSite: "none",
            secure: true,
            path: "/",
        });
        return res.status(200).json({
            message: "Logout Successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while processing your request.",
        });
    }
};

export const ForgetOtp = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(404).json({
                message: "Please Provide Email Address",
            });
        }

        const find = await Admin.findOne({ email: email });
        if (!find) {
            return res.status(404).json({
                message:
                    "We couldn't find an account associated with this email address. Please check and try again!",
            });
        }

        if (find.otp.expired - 180000 > new Date().getTime()) {
            const minuteCat = find.otp.expired - 180000;
            const time = minuteCat - new Date().getTime();
            const showTime = time / 1000;
            return res.status(400).json({
                message: `OTP  has already send to you email. please try again ${showTime.toFixed(
                    0
                )} seconds later`,
            });
        }
        const OTP = await random(6, true, false, false, false);

        await Mail(email, "MATRIX OTP", OtpMail(OTP));
        const update = await Admin.findByIdAndUpdate(find._id, {
            $set: {
                "otp.code": OTP,
                "otp.expired": new Date().getTime() + 5 * 60 * 1000,
            },
        });

        if (!update) {
            return res.status(404).json({
                message: "Sorry, Something Wrong",
            });
        }

        return res.status(200).json({
            message: "Mail sent successfully Please check your mail box",
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while processing your request.",
        });
    }
};

export const ForgetPassword = async (req, res) => {
    try {
        const { email, code, password } = req.body;
        if (
            !email ||
            !code ||
            !password ||
            email == "" ||
            code == "" ||
            password == ""
        ) {
            return res.status(404).json({
                message: "All fields are required and cannot be empty",
            });
        }
        if (!validator.isEmail(email)) {
            return res.status(404).json({
                message: "Invalid email address",
            });
        }

        const checkEmailInfo = await Admin.findOne({ email });

        if (!checkEmailInfo) {
            return res.status(404).json({
                message: "No account found with this email address.",
            });
        }

        if (checkEmailInfo.otp.code != code) {
            return res.status(400).json({
                message: "This OTP Wrong. Please Provide Correct OTP",
            });
        }

        if (checkEmailInfo.otp.expired < new Date().getTime()) {
            return res.status(400).json({
                message: "The OTP has expired. Please request a new one.",
            });
        }

        const passwordCheck = await bcrypt.compare(
            password,
            checkEmailInfo.password
        );

        if (passwordCheck) {
            return res.status(400).json({
                message: "New password must be different from the current one.",
            });
        }

        if (password <= 6) {
            return res.status(400).json({
                message:
                    "our password must be at least 6 characters long. Please try again!",
            });
        }

        const Update = await Admin.findByIdAndUpdate(
            checkEmailInfo._id,
            {
                password: await bcrypt.hash(password, 10),
                expired: new Date().getTime(),
            },
            { new: true }
        );

        if (!Update) {
            return res.status(400).json({
                message: "Password Update Field",
            });
        }

        Mail(
            email,
            "Password Reset",
            "",
            PasswordResetSuccess(checkEmailInfo?.email)
        );
        return res.status(200).json({
            message: "Password Reset successfully",
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "An error occurred while processing your request.",
        });
    }
};

export const ChangePassword = async (req, res) => {
    try {
        const { id } = req.headers;
        const { oldPassword, newPassword } = req.body;
        if (!oldPassword || !newPassword) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }
        if (oldPassword == "" || newPassword == "") {
            return res.status(400).json({
                message: "Fields cannot be empty",
            });
        }
        const findUser = await Admin.findById(id);
        if (!findUser) {
            return res.status(404).json({
                message: "There is no account associated with this email address.",
            });
        }
        const matchPassword = await bcrypt.compare(
            oldPassword,
            findUser.password
        );
        if (!matchPassword) {
            return res.status(400).json({
                message: "Incorrect password. Please try again.",
            });
        }
        if (newPassword == oldPassword) {
            return res.status(400).json({
                message: "New password must be different from the current one.",
            });
        }
        if (newPassword.length < 6) {
            return res.status(400).json({
                message: "New password must be at least 6 characters long.",
            });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updatePassword = await Admin.findByIdAndUpdate(
            findUser._id,
            { password: hashedPassword },
            { new: true }
        );
        if (!updatePassword) {
            return res.status(400).json({
                message: "Password update failed",
            });
        }
        return res.status(200).json({
            message: "Password updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while processing your request.",
        })
    }
}

export const BusinessInfoRead = async (req, res) => {
    try {
        const { id } = req.headers

        const BusinessInfo = await Business.findOne({ userId: id }).select({ userId: 0, createdAt: 0, updatedAt: 0 });

        if (!BusinessInfo) {
            return res.status(404).json({
                message: "No business information.",
            });
        }

        return res.status(200).json({
            businessInfo: BusinessInfo,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "An error occurred while processing your request."
        })
    }
}

export const BusinessInfoUpdate = async (req, res) => {
    try {
        const { id } = req.headers
        const { name, logo, payMethod = {} } = req.body;
        const { type, number, step } = payMethod;
        console.log(req.body)

        if (!name && !logo && !type && !number && !step) {
            return res.status(400).json({
                message: "At least one field is required"
            });
        }

        if (type) {
            const method = ['bkash', 'nagad', 'rocket', 'upay']
            const methodCheck = method.includes(type)
            if (!methodCheck) {
            return res.status(400).json({
                message: "Please select a valid method: bkash, nagad, rocket, or upay."
            })
            }
            if (!number) {
            return res.status(400).json({
                message: "Number is required"
            })
            }
        }

        const updateBusiness = await Business.findOneAndUpdate({ userId: id },
            {
                name,
                logo,
                [type]: {
                    number,
                    step
                }
            },
            { new: true }
        )
        if (!updateBusiness) {
            return res.status(400).json({
                message: "Business Info Update Failed"
            })
        }

        return res.status(200).json({
            message: "Business Info Update Successful"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "An error occurred while processing your request.",
        })
    }
}
