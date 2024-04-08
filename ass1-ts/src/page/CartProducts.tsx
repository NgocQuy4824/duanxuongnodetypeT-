
import BannerCart from '../components/BannerCart'
import CartTable from '../components/CartTable'
import Footer from '../components/Footer'
import Headers from '../components/Headers'
import Service from '../components/Service'

const CartProducts = () => {

    return (
        <>
        <div className='container'>
            <Headers />
            <BannerCart/>
            <CartTable />   
            <Service/>
            <Footer/>
        </div>
           
        </>

    )
}

export default CartProducts