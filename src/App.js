import './App.css';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeMember from './components/BeMember/BeMember';
import Health from './components/Health/Health';
import Products from './components/Products/Products';
import { useEffect, useState } from 'react';

import s from './components/Products/Products.module.css';

function App() {

  /* Fetching product with API */
  const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://smuknu.webmcdm.dk/products')
            .then((response) => response.json())
            .then((productData) => {
                setProduct(productData);
                console.log(productData)
            })
    }, [])

  
  /* Shopping Cart */
  const [cart, setCart] = useState([]);

    const AddToCart = () => {
        setCart(
            <div>
                <img src={product.image} alt="Product"/>
                <div>
                    <p className={s.productTitle}>
                        {product.title}
                    </p>
                    <p className={s.price}>
                        {product.price},00 kr.
                    </p>
                </div>
          </div>
        )
        console.log('TEST!!!!!!', product.title)
    }

  

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar cart={cart}/>
      
          <Routes>
          <Route path='/' element={<Landing />} />
            <Route path='/blivmedlem' element={ <BeMember/>} />
            <Route path='/sundhed' element={ <Health/>} />
          <Route path='/produkter' element={<Products AddToCart={ AddToCart} product={product} />} />
          </Routes>
        
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
