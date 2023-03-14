import './App.css';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeMember from './components/BeMember/BeMember';
import Health from './components/Health/Health';
import Products from './components/Products/Products';
import { useEffect, useState } from 'react';
import style from './components/ShoppingCart/ShoppingCart.module.css'
/* import config from './configuration'; */


function App() {

  /* Fetching product with API */
  const [product, setProduct] = useState([]);

  useEffect(() => {
    
        fetch('./data/products.json')
        /* fetch('https://smuknu.webmcdm.dk/products') */
            .then((response) => response.json())
            .then((productData) => {
                setProduct(productData);
                console.log(productData)
            })
    }, [])

  
  /* Shopping Cart */
  const [cart, setCart] = useState([]);

  const AddToCart = (product) => {
    /* setCart([...cart, product]) */

      setCart(
        <div className={style.cartContent}>
          <div className={style.cartItem}>
            <div className={style.cartImgBox}>
                <img className={style.cartImg} src={product.image} alt="Product"/>
            </div>
            <div className={style.cartProductBox}>
              <div className={style.productTitle}>
                <p className={style.productTitleText}>
                    {product.title}
                </p>
              </div>
              <div className={style.cartPrice}>
                <p className={style.price}>
                    {product.price},00 kr.
                </p>
              </div>
            </div>
          </div>
      </div>
      )
    
      
      console.log('TEST!!!!!!', product.title)
  }

  const renderCart = () => 
    {cart.map((product, idx) => (
        <div className={style.cartContent} key={idx}>
          <div className={style.cartItem}>
            <div className={style.cartImgBox}>
                <img className={style.cartImg} src={product.image} alt="Product"/>
            </div>
            <div className={style.cartProductBox}>
              <div className={style.productTitle}>
                <p className={style.productTitleText}>
                    {product.title}
                </p>
              </div>
              <div className={style.cartPrice}>
                <p className={style.price}>
                    {product.price},00 kr.
                </p>
              </div>
            </div>
          </div>
          </div>
      ))
    }

  return (
    <div className='App'>
      {/* <BrowserRouter basename={config.development ? '/' : '/smuknu'}> */}
      <BrowserRouter /* basename="smuknu" */>
        <Navbar cart={cart} AddToCart={AddToCart} renderCart={renderCart} />
      
          <Routes>
          {/* <Route path={config.development ? '/' : '/smuknu'} element={<Landing />} /> */}
          <Route path='/' element={<Landing />} />
          <Route path='/blivmedlem' element={ <BeMember/>} />
          <Route path='/sundhed' element={ <Health/>} />
          <Route path='/produkter' element={<Products AddToCart={AddToCart} product={product} />} />
          </Routes>
        
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
