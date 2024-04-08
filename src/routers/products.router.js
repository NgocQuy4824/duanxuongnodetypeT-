import express from 'express';
import { addProducts, getProducts, getProductsById, removeProduct, updateProducts } from '../controllers/products';

const router = express.Router();

router.get(`/products`,getProducts)
router.get(`/products/:id`,getProductsById)
router.post(`/products`,addProducts)
router.delete(`/products/:id`,removeProduct)
router.put(`/products/:id`,updateProducts)
export default router;