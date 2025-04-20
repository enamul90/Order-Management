import mongoose from "mongoose";
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";
import validator from "validator";

export const CreateOrder = async (req, res) => {
    try {
        const { productId, productSize, color, quantity, fullName, phone, email, address: {
            city, postCode, country, street, house, state, apartment, area, landmark, location
        }, paymentMethod, transactionId } = req.body;
        if (!productId || !quantity || !fullName || !phone || !email) {
            return res.status(400).json({
                message: "Please fill all required fields",
            });
        }

        if (phone) {
            const bangladeshiPhoneRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;
            if (!bangladeshiPhoneRegex.test(phone)) {
                return res.status(400).json({
                    message: "Invalid Bangladeshi phone number format",
                });
            }
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                message: "The provided email address is not valid. Please enter a valid email.",
            });
        }

        if (!paymentMethod) {
            return res.status(400).json({
                message: "Please select a payment method.",
            });
        }

        if (["bkash", "nagad", "rocket", "upay"].includes(paymentMethod)) {
            if (!transactionId) {
                return res.status(400).json({
                    message: "Please provide a transaction ID.",
                });
            }
        }

        if (!city || !postCode || !country || !street || !house || !state || !area) {
            return res.status(400).json({
                message: "Please fill all address fields",
            });
        }


        const product = await Product.findOne({ _id: productId });
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        if (product.stock < parseInt(quantity)) {
            return res.status(400).json({
                message: "Product out of stock",
            });
        }

        if (color) {
            const productColor = product.colors.find(c => c.color === color);
            if (!productColor) {
                return res.status(400).json({
                    message: "The selected color is not available for this product",
                });
            }
        }

        if (productSize) {
            const isSizeAvailable = product.productSize.find(s => s === productSize);
            if (!isSizeAvailable) {
                return res.status(400).json({
                    message: "The selected size is not available for this product",
                });
            }
        }


        const order = await Order.create({
            userId: product.userId,
            productId: productId,
            productSize,
            color,
            quantity,
            price: product.price,
            totalPrice: product.price * Number(quantity),
            fullName,
            phone,
            email,
            address: {
                city,
                postCode,
                country,
                street,
                house,
                state,
                apartment,
                area,
                landmark,
                location
            },
            paymentMethod,
            transactionId
        });

        if (!order) {
            return res.status(400).json({
                message: "Failed to create order",
            });
        }

        await Product.findOneAndUpdate(
            { _id: productId },
            { $inc: { stock: -quantity } },
            { new: true }
        );

        return res.status(201).json({
            message: "Order created successfully",
        });

    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while processing your request",
        });
    }
};

export const GetOrders = async (req, res) => {
    try {
        const id = new mongoose.Types.ObjectId(req.headers.id);

        const orders = await Order.aggregate([
            {
                $match: { userId: id }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "product"
                }
            },
            {
                $unwind: "$product"
            },
            {
                $addFields: {
                    orderTime: {
                        $dateToString: {
                            format: "%Y-%m-%d %H:%M:%S",
                            date: "$createdAt",
                            timezone: "Asia/Dhaka"
                        }
                    },

                }
            },
            {
                $project: {
                    _id: 1,
                    productId: 1,
                    productSize: 1,
                    color: 1,
                    quantity: 1,
                    price: 1,
                    totalPrice: 1,
                    fullName: 1,
                    phone: 1,
                    email: 1,
                    address: 1,
                    paymentMethod: 1,
                    transactionId: 1,
                    orderTime: 1,
                    status: 1,
                    paymentMethod: 1,
                    transactionId: 1,
                    paymentStatus: 1,
                    deliveryDate: 1,
                    trackingId: 1,
                    trackingUrl: 1,
                    cancelDate: 1,
                    product: {
                        name: 1,
                        brand: 1,
                        image: { $arrayElemAt: ["$product.images", 0] },
                        shortDescription: 1,
                    }
                }
            }
        ]);

        return res.status(200).json({
            orders
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "An error occurred while processing your request",
        });
    }
}

export const GetSingleOrder = async (req, res) => {
    try {
        const orderId = new mongoose.Types.ObjectId(req.params.orderId);

        const order = await Order.aggregate([
            {
                $match: { _id: orderId }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "product"
                }
            },
            {
                $unwind: "$product"
            },
            {
                $addFields: {
                    orderTime: {
                        $dateToString: {
                            format: "%Y-%m-%d %H:%M:%S",
                            date: "$createdAt",
                            timezone: "Asia/Dhaka"
                        }
                    },

                }
            },
            {
                $project: {
                    _id: 1,
                    productId: 1,
                    productSize: 1,
                    color: 1,
                    quantity: 1,
                    price: 1,
                    totalPrice: 1,
                    fullName: 1,
                    phone: 1,
                    email: 1,
                    address: 1,
                    paymentMethod: 1,
                    transactionId: 1,
                    orderTime: 1,
                    status: 1,
                    paymentMethod: 1,
                    transactionId: 1,
                    paymentStatus: 1,
                    deliveryDate: 1,
                    trackingId: 1,
                    trackingUrl: 1,
                    cancelDate: 1,
                    product: {
                        name: 1,
                        brand: 1,
                        images: 1,
                    },
                    shortDescription: 1,
                }
            }
        ]);

        return res.status(200).json({
            order: order[0]
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while processing your request",
        });
    }
}

export const UpdateOrder = async (req, res) => {
    try {
        const orderId = new mongoose.Types.ObjectId(req.params.orderId);
        const { id } = req.headers;

        if (!orderId) {
            return res.status(400).json({
                message: "Please provide a Order ID",
            });
        }

        const { productSize, color, quantity, fullName, phone, email, address: {
            city, postCode, country, street, house, state, apartment, area, landmark, location
        } = {}, paymentMethod, status, paymentStatus, trackingId, trackingUrl, cancelDate, deliveryDate } = req.body;

        if (!productSize && !color && !quantity && !fullName && !phone && !email && !city && !postCode && !country && !street && !house && !state && !area && !apartment && !landmark && !location && !paymentMethod && !status && !paymentStatus && !deliveryDate && !trackingId && !trackingUrl && !cancelDate) {
            return res.status(400).json({
                message: "Please provide at least one field to update",
            });
        }

        if (phone) {
            const bangladeshiPhoneRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;
            if (!bangladeshiPhoneRegex.test(phone)) {
                return res.status(400).json({
                    message: "Invalid Bangladeshi phone number format",
                });
            }
        }

        if (email) {
            if (!validator.isEmail(email)) {
                return res.status(400).json({
                    message: "The provided email address is not valid. Please enter a valid email.",
                });
            }
        }

        const order = await Order.findOne({ _id: orderId });
        const product = await Product.findOne({ _id: order.productId });

        if (productSize) {
            const isSizeAvailable = product.productSize.find(s => s === productSize);
            if (!isSizeAvailable) {
                return res.status(400).json({
                    message: "The selected size is not available for this product",
                });
            }
        }

        if (color) {
            const productColor = product.colors.find(c => c.color === color);
            if (!productColor) {
                return res.status(400).json({
                    message: "The selected color is not available for this product",
                });
            }
        }

        if (quantity) {
            if (product.stock < parseInt(quantity - order.quantity)) {
                return res.status(400).json({
                    message: "Product out of stock",
                });
            }
        }

        if (id !== product.userId.toString() || id !== order.userId.toString()) {
            return res.status(400).json({
                message: "You are not authorized to update this order",
            });
        }

        if (status) {
            if (status === "cancelled") {
                await Product.findByIdAndUpdate({ _id: order.productId }, {
                    $inc: { stock: order.quantity }
                }, { new: true });
            }
        }



        const orderUpdate = await Order.findByIdAndUpdate(orderId, {
            productSize,
            color,
            quantity,
            fullName,
            phone,
            email,
            totalPrice: quantity ? product.price * Number(quantity) : order.totalPrice,
            address: {
                city: city ? city : order.address.city,
                postCode: postCode ? postCode : order.address.postCode,
                country: country ? country : order.address.country,
                street: street ? street : order.address.street,
                house: house ? house : order.address.house,
                state: state ? state : order.address.state,
                apartment: apartment ? apartment : order.address.apartment,
                area: area ? area : order.address.area,
                landmark: landmark ? landmark : order.address.landmark,
                location: location ? location : order.address.location
            },
            paymentMethod,
            status,
            paymentStatus,
            trackingId,
            trackingUrl,
            cancelDate,
            deliveryDate
        }, { new: true });

        if (!orderUpdate) {
            return res.status(400).json({
                message: "Failed to update order",
            });
        }

        return res.status(200).json({
            message: "Order updated successfully",
        })
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while processing your request",
        });
    }
}

