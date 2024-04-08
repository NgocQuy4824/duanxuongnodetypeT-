import { Link } from "react-router-dom";
import { Iproduct } from "../interface/product";

// import React from 'react'
type ProductsListProps = {
    products: Iproduct[];
    onRemove: (id: string) => void
}

const Shop = ({ products }: ProductsListProps) => {
    console.log(products);
    return (
        <section className="shop">
            <div className="container">
                <div className="section-heading-shop">
                    <h2 className="section-heading__title">
                        Shop
                    </h2>
                </div>
                <div className="section-body">
                    <div className="products">
                    {products?.map((item: any, index) =>
                    (
                        <div className="product-item" key={index}>
                            <div className="product__thumbnail">
                                <img src="https://picsum.photos/id/322/300/300" alt="" />
                                <span className="product__sale">30%</span>
                            </div>
                            <div className="product-content">
                                <h3 className="product__name">
                                    <b>{item.name}</b>
                                </h3>
                                {/* <a className="product__cate">Stylish cafe chair</a> */}
                                <div className="product_price">
                                    <span className="products-price__new">Gía Sản Phẩm :{item.price}</span>
                                </div>
                                <div className="product_quantily">
                                    <span>Số Lượng :{item.quantily}</span>
                                </div>
                                <div className="products_description">
                                    <span>Mô Tả :{item.description}</span>
                                </div>
                                <div className="">
                                    <Link className="btn btn-primary" to={`/detailproducts/${item?._id}`} >Chi Tiết Sản Phẩm</Link>
                                </div>
                            </div>
                            {/* <div className="product-content-extra">
                                <button className="btn__addtocart">Add to cart</button>
                                <div>
                                    <span>Share</span>
                                    <span>Compare</span>
                                    <span>Like</span>
                                </div>
                            </div> */}
                        </div>
                    ))}

                    </div>
                </div>
            </div><br /><br /><br />
        </section>
    )
}

export default Shop