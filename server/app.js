import express from "express";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import dotenv from "dotenv";
import compression from "compression";
import mongodbSanitize from "mongodb-sanitize";


//import file 
import Database from "./config/database.js";
import AdminRouter from "./routers/adminRouter.js";
import ProductRouter from "./routers/productRouter.js";
import Order from "./routers/orderRouter.js";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

const limit = rateLimit({
    windowMs: parseInt(process.env.REQ_MS, 10),
    max: parseInt(process.env.REQ_LIMIT, 10),
    message: "Too many requests, please try again later.",
    statusCode: 429,
});

app.use(limit);
const allowedOrigins = process.env.FRONTEND_URLS.split(",");
app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);

app.use(helmet())
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            imgSrc: ["'self'", "data:"],
        },
    })
);
app.use(cookieParser());
app.use((req, res, next) => {
    ['body', 'query', 'params'].forEach((key) => {
        if (req[key]) {
            for (const prop in req[key]) {
                req[key][prop] = mongodbSanitize(req[key][prop]);
            }
        }
    });
    next();
});
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());


app.use("/api/v1", AdminRouter, ProductRouter, Order);

app.use('/images', express.static('images'))

app.listen(PORT, () => {
    Database();
    console.log(`Server Is Running On Port ${PORT}`);
});