import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Iproduct } from '../interface/product';


const ProductDetail: React.FC = () => {
    const [product, setProduct] = useState<Iproduct | null>(null);
    const { id } = useParams<{ id: string }>(); // Sử dụng useParams để lấy productId từ URL

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get<Iproduct>(`http://localhost:8080/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Chi Tiết Sản Phẩm</h2>
            <p><strong>Tên sản phẩm:</strong> {product.name}</p>
            <p><strong>Giá sản phẩm:</strong> {product.price}</p>
            <p><strong>Số lượng sản phẩm:</strong> {product.quantily}</p>
            <p><strong>Mô tả sản phẩm:</strong> {product.description}</p>
        </div>
    );
}

export default ProductDetail;
