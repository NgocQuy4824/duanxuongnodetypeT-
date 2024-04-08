// import React from 'react'
import { useEffect } from 'react';
import { Iproduct } from '../interface/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


//đây là kiểu dữ liệu cho cả products
type ProductsAddProps = {
    onEdit: (products: Iproduct) => void;
}
//đây là kiểu dữ liệu cho inputs
type Inputs = {
    _id: string
    name: string;
    price: number;
    quantily: number;
    description: string;
}

const ProductsEdit = ({ onEdit }: ProductsAddProps) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, formState: {}, reset } = useForm<Inputs>();    

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:8080/api/products/${id}`)
            console.log('data', data)
            reset(data);
        })()
    }, [])

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        onEdit(data)
        navigate('/admin/products')
    }
    return (
        <div>
            <h1>Cập Nhật Sản Phẩm</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="" className="form-label">Tên Sản Phẩm</label>
                    <input type="text" placeholder='Nhập Tên Sản Phẩm' className="form-control" {...register("name")} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className="form-label">Gía Sản Phẩm</label>
                    <input type="text" placeholder='Nhập Gía Sản Phẩm' className="form-control" {...register("price")} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className="form-label">Số Lượng Sản Phẩm</label>
                    <input type="text" placeholder='Nhập Số Lượng Sản Phẩm' className="form-control" {...register("quantily")} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className="form-label">Mô Tả Sản Phẩm</label>
                    <input type="text" placeholder='Nhập Mô Tả Sản Phẩm' className="form-control" {...register("description")} />
                </div>
                <button className='btn btn-danger'>Cập Nhật Sản Phẩm</button>
            </form>
        </div>
    )
}

export default ProductsEdit