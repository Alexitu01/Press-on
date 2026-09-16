import "./header.css";
import {useState} from "react";



function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="items">
        <div className="burgerMenu">
          <button onClick={() => setIsMenuOpen((active) => !active)}>
            {" "}
            <img src="imgs/burger.png" className="burger" id="burger" />
          </button>
          <nav className={isMenuOpen ? 'menu show' : 'menu'}></nav>
        </div>
        <div className="side-options">
          <h3 className="currency"> € (euro)</h3>
          <h3 className="info">info</h3>
          <button className="goToCart">
            {" "}
            <img src="imgs/cart.png" className="cart" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
