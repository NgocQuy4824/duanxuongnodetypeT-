import { useEffect, useState } from 'react'
import './App.css'
import { Iproduct } from './interface/product';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductsAdd from './components/ProductsAdd';
import ProductsEdit from './components/ProductsEdit';
import LayoutAdmin from './components/Layout/LayoutAdmin';
import LayoutWebsite from './components/Layout/LayoutWebsite';
import ShopPage from './page/ShopPage';
import DashBoard from './page/DashBoard';
import ProductDetail from './components/ProductsDetail';
import ProductsDetaiPage from './page/ProductsDetaiPage';
import CartProducts from './page/CartProducts';
import CheckOut from './page/CheckOut';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Order from './page/Order';

function App() {

  const [products, setProducts] = useState<Iproduct[]>([])
  //hiển thị sản phẩm
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:8080/api/products`);
      setProducts(data);
    })();
  }, []);
  //xóa sản phẩm 
  const onHandleRemove = async (id: string) => {
    try {
      const confirm = window.confirm('Bạn Có Chắc Chắn Muốn Xóa Không ?');
      if (confirm) {
        await axios.delete(`http://localhost:8080/api/products/${id}`)
        //có cái filter rồi thì k cần reload lại trang web nữa
        setProducts(products.filter((item) => item['_id'] !== id));
      }
      alert('xóa sản phẩm thành công')
      // window.location.reload();

    } catch (error) {
      console.log(error)
    }
  }
  //hàm thêm 
  const onHandleAdd = async (product: Iproduct) => {
    try {
      const { data } = await axios.post(`http://localhost:8080/api/products`, product);
      setProducts([...products, data])
      alert('Thêm Sản Phẩm Thành Công !')
    } catch (error) {

    }
  }
  //hàm cập nhật 
  const onHandleEdit = async (product: Iproduct) => {
    try {
      const { data } = await axios.put(`http://localhost:8080/api/products/${product['_id']}`, product);
      //rerender
      // const listRestProduct = products.filter(i => i['_id'] !== product['_id'])
      // const newProduct = [...listRestProduct, ...[product]]
      // console.log('newProduct', newProduct)
      setProducts(products.map(item => item['_id'] == data.id ? data : item))
      alert('Cập Nhật Sản Phẩm Thành Công !')
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>

      <Routes>
        <Route path='admin' element={<LayoutAdmin />} >
          <Route path='products' element={<ProductsList products={products} onRemove={onHandleRemove} />} />
          <Route path='products/add' element={<ProductsAdd onAdd={onHandleAdd} />} />
          <Route path='products/:id/edit' element={<ProductsEdit onEdit={onHandleEdit} />} />
          <Route path='productsdetail/:id' element={<ProductDetail />} />

        </Route>
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='/' element={<LayoutWebsite />}>
          <Route path='/dashboard' element={<DashBoard products={products} />} />
          <Route path='/shoppage' element={<ShopPage products={products} />} />
          <Route path='/detailproducts/:id' element={<ProductsDetaiPage />} />
          <Route path='/cart' element={<CartProducts />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/order' element={<Order/>}/>
        </Route>
      </Routes>


    </>
  )
}

export default App
