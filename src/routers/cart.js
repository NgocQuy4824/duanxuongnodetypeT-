import { Router } from "express";
import { addItemToCart, getCartByUserId, removeFromCart, updateProductQuantily } from "../controllers/cart";

const router = Router();
router.get("/cart/:userId", getCartByUserId)
router.post("/cart/add-to-cart", addItemToCart);
router.put("/cart/update-product-quantily", updateProductQuantily);
router.delete("/cart/remove-cart", removeFromCart)
export default router;