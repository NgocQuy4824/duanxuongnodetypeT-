// import { string } from "joi";
import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantily: {
        type: Number,
    },
    description: {
        type:String,
    }
}, {
    //đây là tự động th mongo sinh ra có thời gian tạo
    timestamps: true, versionKey: false
})

export default mongoose.model("Product", productsSchema);