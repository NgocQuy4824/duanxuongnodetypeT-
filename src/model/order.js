//oder
import mongoose,{Schema} from "mongoose";


const OrderItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantily: {
        type: Number,
        required: true
    }
})
const OrderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    item: [OrderItemSchema],
    orderNumber: {
        type: String,
        required: true,
        unique: true
    },
    customerInfo: {
        //lấy trực tiếp giá trị từ form ra

        type: {
            name: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
            },
            email: {
                type: String,
                required: true,
            },
            payment: {
                type: String,
            },
            city: {
                type: String
            }
        },
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
        default: "pending",
    },
}, {
    timestamps: true, verionKey: false
})

export default mongoose.model('Order', OrderSchema)