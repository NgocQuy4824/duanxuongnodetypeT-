import { Link } from "react-router-dom"
import { useShoppingContext } from "../contexts/ShoppingContext"


const Headers = () => {

    const { cartQuantily } = useShoppingContext()
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <Link to={`/dashboard`}>Logo</Link>
                    <nav className="main-menu">
                        <div>
                            <ul className="main-menu__list">
                                <li className="main-menu__item"><Link to={`/dashboard`}>Home</Link></li>
                                <li className="main-menu__item"><Link to={`/shoppage`}>Shop</Link></li>
                                <li className="main-menu__item"><Link to={`/cart`}>Giỏ Hàng</Link></li>
                                <li className="main-menu__item"><Link to={`/checkout`}>Check Out</Link></li>
                            </ul>
                        </div>

                    </nav>
                    <div className="header-block">
                        <div className="user">
                            <Link to={`/signin`}><i className="fa-solid fa-user"></i></Link>
                        </div>
                        <div className="search">
                            <i className="fa-brands fa-searchengin"></i>
                        </div>
                        <div className="heart">
                            <i className="fa-solid fa-heart"></i>
                        </div>
                        <div className="ml-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/cart">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span className="position-absolute top-0 start-1 badge badge-pill bg-danger">{cartQuantily}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Headers