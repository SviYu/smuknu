import s from './Header.module.css';
import headerBg from './../../assets/headers/front.jpg';
/* import { Link } from 'react-router-dom'; */


const Header = () => {
    
    return (
        <header className={s.header} id="top">
            <img className={s.headerBg} src={headerBg} alt="Header background" />
            <div className={s.headerBox}>
                <h1 className={s.title}>SKØNHED <br /> FOR ALLE</h1>
                <p className={s.subtitle}>Alt hvad du behøver...</p>
                <p className={s.subtitle}>SMUK NU</p>
                <a className={s.headerBtnLink} href="#chosenItems">Se udvalgte produkter</a>
               {/*  <div><Link to='chosenItems' className="pinkBtn">Se udvalgte produkter</Link></div> */}
            </div>
        </header>
    )
}
export default Header