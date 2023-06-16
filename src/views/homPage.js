import "../styles/homePage.scss";
import { Link } from "react-router-dom";
import image from "../accsets/image/MadamBoutique.png";

function HomePage() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header-small">
          <div className="header-small--login">
            <button className="btn-login">
              <Link to="/login">Đăng nhập</Link>
            </button>
            <button className="btn-register">
              <Link to="/register">Đăng ký</Link>
            </button>
          </div>
          <div className="header-small--select">
            <button>Hướng dẫn</button>
            <button>Đơn hàng</button>
          </div>
        </div>
        <div className="header-content">
          <img src={image} alt="logoShop" />
          <div className="icon-textcart">
            <div className="icon-cart">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="amount-product">
              Giỏ hàng
              <span className="amount">(0) Sản phẩm</span>
            </div>

            {/* <div className="amount-product"></div> */}
          </div>
        </div>
      </div>
      <div className="wrapper-content">
        <div className="wrapper-nav">
          <ul>
            <li>
              <a class="active" href="#home">
                TRANG CHỦ
              </a>
            </li>
            <li>
              <a href="#news">GIỚI THIỆU</a>
            </li>
            <li>
              <a href="#news">SẢN PHẨM</a>
            </li>
            <li>
              <a href="#contact">TIN TỨC</a>
            </li>
            <li>
              <a href="#about">SẢN PHẨM</a>
            </li>
          </ul>
        </div>
        <div className="content"></div>
        <div className="sidebar"></div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default HomePage;
