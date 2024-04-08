// import React from 'react'
import { Iproduct } from '../interface/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


//đây là kiểu dữ liệu cho cả products
type ProductsAddProps = {
  onAdd: (products: Iproduct) => void;
}
//đây là kiểu dữ liệu cho inputs
type Inputs = {
  _id: string
  name: string;
  price: number;
  quantily: number;
  description: string;
}

const ProductsAdd = ({ onAdd }: ProductsAddProps) => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onAdd(data)
    navigate('/admin/products')
  }
  return (
    <div>
      <h1>Thêm Sản Phẩm</h1>
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
        <button className='btn btn-danger'>Thêm Sản Phẩm</button>
      </form>
    </div>
  )
}

export default ProductsAdd