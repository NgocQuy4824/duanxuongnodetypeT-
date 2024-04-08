// import React from 'react'
import { Link } from 'react-router-dom';
import { Iproduct } from '../interface/product'

type ProductsListProps = {
    products: Iproduct[];
    onRemove: (id: string) => void;
}

const ProductsList = ({ products, onRemove, }: ProductsListProps) => {
    return (<>
        <h1>Quản Lý Sản Phẩm</h1>
        <Link to={`add`} className='btn btn-danger'>Thêm Sản Phẩm</Link>
        <table className='table table-bodered'>
            <thead>
                <tr>
                    <th>Số Thứ Tự</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Gía Sản Phẩm</th>
                    <th>Số Lượng Sản Phẩm</th>
                    <th>Mô Tả Sản Phẩm</th>
                    <th>Hành Động</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item: any, index) => {
                    // console.log(products)
                    return (
                        <tr key={index}>
                            <td>{item['_id']}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantily}</td>
                            <td>{item.description}</td>
                            <td>
                                <Link to={`/admin/products/${item['_id']}/edit`} className='btn btn-primary'>Cập Nhật Sản Phẩm</Link>
                                <button className='btn btn-danger' onClick={() => onRemove(item['_id'])}>Xóa Sản Phẩm</button>
                                <Link to={`/admin/productsdetail/${item['_id']}`} className='btn btn-primary'>Chi Tiết</Link>
                              
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>

    </>

    )

}

export default ProductsList