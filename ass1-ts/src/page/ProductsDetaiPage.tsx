// import React from 'react'

// import { useParams } from "react-router-dom"
import { useParams } from "react-router-dom"

import { Iproduct } from "../interface/product"
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import Service from "../components/Service";
import Footer from "../components/Footer";
import Headers from "../components/Headers";

const ProductsDetaiPage = () => {

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState({})
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:8080/api/products/${id}`);
      console.log(data)
      setProduct(data)
    })()
  }, [id])

  return (
    <div className="container">
      <Headers />
      <Banner /><br />
      <div className="card" style={{ width: '50rem' }}>
        <img src="https://picsum.photos/id/322/300/300" className="card-img-top" alt="" width={100} height={500} />
        <div className="card-body">
          <h3 className="card-title"><b>Tên Sản Phẩm : {product.name}</b></h3>
          <p className="card-text">Gía Sản Phẩm : {product.price}</p>
          <p className="card-text">Số Lượng Sản Phẩm : {product.quantily}</p>
          <p className="card-text">Mô Tả Sản Phẩm : {product.description}</p>
        </div><br />
      </div><br />
      <Service />
      <Footer />
    </div>
  )
}

export default ProductsDetaiPage