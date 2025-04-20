import Product from "../models/productModel.js";
import imageUpload from "../utils/multer.js";
import path from "path";
import fs from "fs/promises"


export const createProduct = async (req, res) => {
    try {
        const { id } = req.headers
        imageUpload().array("images", 4)(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }

            const { name, shortDescription, description, brand, color, productSize, price, images, stock, sell } = req.body
            if (!name || !shortDescription || !description || !brand || !color || !price || !req.files) {
                return res.status(400).json({
                    message: "All fields are require"
                })
            }

            const allowedColors = ["black", "white", "navy", "blue", "yellow"];
            const hasInvalidColor = color.some(c => !allowedColors.includes(c));
            const hasDuplicateColors = new Set(color).size !== color.length;

            if (hasInvalidColor) {
                return res.status(400).json({
                    message: "Invalid color(s) provided"
                });
            }

            if (hasDuplicateColors) {
                return res.status(400).json({
                    message: "Duplicate colors are not allowed"
                });
            }

            if (Array.isArray(productSize)) {
                if (new Set(productSize).size !== productSize.length) {
                    return res.status(400).json({
                        message: "Duplicate product sizes are not allowed"
                    });
                }
            }

            if (price < 1) {
                return res.status(400).json({
                    message: "Price must be at least 1."
                });
            }


            const create = await Product.create({
                userId: id,
                name,
                shortDescription,
                description,
                brand,
                color,
                productSize,
                price: Number(price),
                images: req.files.map(file => file.filename),
                stock,
                sell
            });

            if (!create) {
                return res.status(400).json({
                    message: "Product Create Failed"
                })
            }
            return res.status(201).json({
                message: "Product Create Successful"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "An error occurred while processing your request."
        })
    }
}

export const readProduct = async (req, res) => {
    try {
        const { id } = req.headers
        const { page } = req.params
        if (!page) {
            return res.status(400).json({
                message: "The 'page' parameter is required for pagination."
            });
        }
        const products = await Product.find({ userId: id }).skip((Number(page) - 1) * 10).limit(10).select({ createdAt: 0, updatedAt: 0 })
        const addImageDomain = products.map((product) => (
            {
                ...product.toObject(),
                images: product.images.map((img) => `${req.protocol}://${req.get("host")}/images/${img}`),
            }))
        return res.status(200).json({
            products: addImageDomain
        })
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while processing your request."
        })
    }
}

export const readSingleProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        if (!productId) {
            return res.status(400).json({
                message: "Product Id is required"
            }
            )
        }
        const products = await Product.findOne({ _id: productId }).select({ createdAt: 0, updatedAt: 0 })
        const addImageDomain =
        {
            ...products.toObject(),
            images: products.images.map((img) => `${req.protocol}://${req.get("host")}/images/${img}`),
        }
        return res.status(200).json({
            products: addImageDomain
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "An error occurred while processing your request."
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        if (!productId) {
            return res.status(400).json({
                message: "Product Id is required"
            }
            )
        }

        imageUpload().single("images")(req, res, async (err) => {
            const { name, shortDescription, description, brand, color, productSize, price, images, stock, sell, type, index } = req.body;
            if (!name && !shortDescription && !description && !brand && !color && !productSize && !price && !req.files && !stock && !sell && !type) {
                return res.status(400).json({
                    message: "One fields are required"
                })
            }

            if (req.files) {
                if (err) {
                    return res.status(400).json({ message: err.message });
                }
                if (!type || !index) {
                    return res.status(400).json({
                        message: "Type and index are required"
                    })
                }
                const types = ["removeImage", "addImage", "updateImage"]
                const typeCheck = types.some((t) => !t.includes(type))
                if (typeCheck) {
                    return res.status(400).json({
                        message: "Type is Invalid"
                    })
                }
            }

            const product = await Product.findOne({ _id: productId });


            if (price) {
                if (price < 1) {
                    return res.status(400).json({
                        message: "Price must be at least 1."
                    });
                }
            }

            if (type == 'removeImage') {
                if (!index) {
                    return res.status(400).json({
                        message: "Index is required"
                    })
                }
                const removeIMage = await Product.findOneAndUpdate({
                    _id: productId
                }, {
                    $pull: {
                        images: product.images[index]
                    }
                }, { new: true })
                if (removeIMage) {
                    const imagePath = path.join(process.cwd(), 'images', product.images[index]);
                    fs.unlink(imagePath, (err) => {
                        if (err) {
                            return res.status(400).json({
                                message: "Image delete failed"
                            })
                        }
                        return res.status(200).json({
                            message: "Image delete successful"
                        })
                    })
                }
            }

            if (type == 'addImage') {
                const addImage = await Product.findOneAndUpdate({
                    _id: productId
                }, {
                    $push: {
                        images: req.file.filename
                    }
                }, { new: true })
                if (!addImage) {
                    return res.status(400).json({
                        message: "Image add failed"
                    })
                }
                if (addImage) {
                    return res.status(200).json({
                        message: "Image add successful"
                    })
                }
            }

            if (type == "updateImage") {
                if (!index) {
                    return res.status(400).json({
                        message: "Index is required"
                    })
                }
                const update = await Product.findOneAndUpdate({
                    _id: productId
                }, {
                    $set: {
                        [`images.${index}`]: req.file.filename
                    }
                }, { new: true })

                if (update) {
                    const oldImage = product.images[index];
                    const imagePath = path.join(process.cwd(), 'images', oldImage);
                    fs.unlink(imagePath, (err) => {
                        if (err) {
                            return res.status(400).json({
                                message: "Image delete failed"
                            })
                        }
                        return res.status(200).json({
                            message: "Image delete and Update successful"
                        })
                    })
                }
            }



            const productUpdate = await Product.findOneAndUpdate(
                { _id: productId },
                {
                    $set: {
                        name,
                        shortDescription,
                        description,
                        brand,
                        color,
                        productSize,
                        price: price ? Number(price) : product.price,
                        stock,
                        sell
                    }
                },
                { new: true }
            )
            if (!productUpdate) {
                return res.status(400).json({
                    message: "Product Update Failed"
                })
            }

            return res.status(200).json({
                message: "Product Update Successful"
            })

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "An error occurred while processing your request."
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.headers
        const { productId } = req.params;
        if (!productId) {
            return res.status(400).json({
                message: "Product Id is required"
            })
        }
        const product = await Product.findOne({ _id: productId });

        if (id.toString() !== product.userId.toString()) {
            return res.status(403).json({
                message: "You are not the owner of this product."
            });
        }

        product.images.map((img) => {
            const imagePath = path.join(process.cwd(), 'images', img);
            fs.unlink(imagePath, (err) => {
                if (err) {
                    return res.status(400).json({
                        message: "Image delete failed"
                    })
                }
            });
        })
        const deleted = await Product.findOneAndDelete({ _id: productId })
        if (!deleted) {
            return res.status(400).json({
                message: "Product Delete Failed"
            })
        }
        return res.status(200).json({
            message: "Product Delete Successful"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "An error occurred while processing your request."
        })
    }
}