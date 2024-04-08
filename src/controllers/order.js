import Order from "../model/order";
import { StatusCodes } from "http-status-codes";

export const createOrder = async ( req,res)=>{
    try {
        const {userId,items,totalPrice,customerInfo} = req.body;
        const order = await Order.create({userId,items,totalPrice,customerInfo});
        return res.status(StatusCodes.CREATED).json(order)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:error.message})
    }
};