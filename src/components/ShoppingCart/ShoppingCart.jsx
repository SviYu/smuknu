import React, { useState } from 'react';
import s from './ShoppingCart.module.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import style from './ShoppingCart.module.css'

const ShoppingCart = ({cart, renderCart, product }) => {
    const [openCart, setOpenCart] = useState(false);

    /* Toggling the Cart button */
    const toggleCart = () => {
        setOpenCart(!openCart)
    }
    
  return (
      <>
          <ShoppingBagIcon className={s.cartIcon} fontSize='large' onClick={toggleCart} />
          {/* {cart.length} */}
          
          {openCart ? (
                <div className={s.cart}
                    /* Auto-closing of shopping cart clicking in the cart */
                    onClick={() => setOpenCart(prevState => !prevState)}>
                    
                    <div className={s.content}>
                        {cart.length === 0 && <p className={s.cartText}>Der er ingen produkter i kurven</p>}
                          
                        {cart}
                        {/* {renderCart({product})} */}
    
                    </div>
                </div>
            ) : null}
    </>
  )
}

export default ShoppingCart