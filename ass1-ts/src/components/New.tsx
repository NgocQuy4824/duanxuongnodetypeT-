
import { Iproduct } from "../interface/product";
import { useShoppingContext } from "../contexts/ShoppingContext";

type ProductsListProps = {
    products: Iproduct[];
    onRemove: (id: string) => void
}


const New = ({ products }: ProductsListProps) => {
    // console.log(products);
    const {addCartItem} = useShoppingContext()
    return (
        <section className="new">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-heading__title">
                        New
                    </h2>
                </div>
                <div className="section-body">
                    <div className="products" >
                        {products?.map((item: any, index) =>
                        (
                            <div className="product-item" key={index}>
                                <div className="product__thumbnail">
                                    <img src="https://picsum.photos/id/377/300/300" alt="" />
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
                                </div>
                                <div className="product-content-extra">
                                    <a href="#" className="btn btn-primary" onClick={() => addCartItem(item)}>Add To Cart</a>
                                    <div>
                                        <span>Share</span>
                                        <span>Compare</span>
                                        <span>Like</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default New