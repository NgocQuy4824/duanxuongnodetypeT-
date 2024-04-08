
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="section-heading">
          {/* <h2>Footer</h2> */}
        </div>
        <div className="section-body">
          <div className="products-footer">
            <div className="products-footer-item">
              <h3 className="footer-title">Funiro.</h3>
              <span className="footer-text">400 University Drive Suite 200 <br />Coral Gables,
                FL 33134 USA</span>
            </div>
            <div className="products-footer-item">
              <h5 className="footer-title_1">Links</h5>
              <ul className="footer-menu">
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
            <div className="products-footer-item">
              <h5 className="footer-title_1">Help</h5>
              <ul className="footer-menu">
                <li><a href="">Payment Options</a></li>
                <li><a href="">Returns</a></li>
                <li><a href="">Privacy Policies</a></li>
              </ul>
            </div>
            <div className="products-footer-item">
              <h5 className="footer-title_1">Newsletter</h5>
              <div className="footer-btn">
                <input type="text" className="footer-ipn" placeholder="Enter Your Email Address" />
                <button className=""><b>SUBSCRIBE</b></button>
              </div>
            </div>
          </div>
          <div className="products-footer-end">
            <div className="footer-end-title">
              <h6>2023 furino. All rights reverved</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer