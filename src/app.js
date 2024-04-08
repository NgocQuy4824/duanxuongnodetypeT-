import express, { json } from 'express'
import productRouter from './routers/products.router';
import authRouter from './routers/auth'
import { connectDB } from './config/db';
import cors from "cors"
import dotenv from "dotenv";
import morgan from 'morgan';
import cartRouter from './routers/cart'
import orderRouter from './routers/order'


dotenv.config();
const app = express();

//midle ware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

//kết nối vs mongose
connectDB(process.env.DB_URI)

//router
app.use('/api/',productRouter);
app.use('/api/',authRouter)
app.use('/api/',cartRouter)
app.use(`/api/`,orderRouter)
export const viteNodeApp = app;