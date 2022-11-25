import s from './Navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo/smuknu_logo.png';
import ShoppingCart from '../ShoppingCart/ShoppingCart';


const Navbar = ( {cart, product, AddToCart, renderCart } ) => {
    /* Burger Menu */
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
        <div className={s.navbar}>
            <a className={s.logobox} href="#" ><img className={s.logo} src={logo} alt="Logo" /></a>
                <div className={s.right}>
                    <ShoppingCart cart={cart} product={product} AddToCart={AddToCart} renderCart={renderCart}/>    
                    <MenuIcon className={s.burgerIcon} fontSize='large' onClick={toggleMenu}/>
                </div>
        </div>
            
            {openMenu ? (
                <div className={s.burgerMenu}>
                    <ul className={s.burgerList}
                        /* Auto-closing of burger menu after clicking the link */
                        onClick={() => setOpenMenu(prevState => !prevState)}>
                        
                        <Link to="/smuknu" className={s.burgerItem}>
                            <p className={s.burgerLink}>Forsiden</p>
                        </Link>
                        <Link to="/produkter" className={s.burgerItem}>
                            <p className={s.burgerLink}>Vores Produkter</p>
                        </Link>
                        <Link to="/sundhed" className={s.burgerItem}>
                            <p className={s.burgerLink}>Spørg om sundhed</p>
                        </Link>
                        <Link to="/blivmedlem" className={s.burgerItem}>
                            <p className={s.burgerLink}>Bliv medlem</p>
                        </Link>
                    </ul>
                </div>
            ) : null}

            
            
        </>
    )
}
export default Navbar