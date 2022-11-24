import s from './Products.module.css';
import bgImage from './../../assets/headers/products.jpg'
import ProductItem from './ProductItem';
import Subscribe from '../Subscribe/Subscribe';

const Products = ( {AddToCart, product} ) => {
 
    return (
        <div className={s.section} id="top">
            <div className={s.header}>
                <img className={s.bgImage} src={bgImage} alt="Products" />
                <div className={s.sectionBox}>
                    <h1 className={s.title}>SKØNNE PRODUKTER</h1>
                    <p className={s.undertitle}>Herunder finder du alle vores produkter</p>
                </div>
            </div>

            {/* Product Item */}
            <div>
                <h2 className={s.title2}>
                    ALT ER <br /> <span className={s.pinkTitle}>SKØNHED</span> 
                </h2>

                <div className={s.wrapper}>
                    
                    {product.map((product) => <ProductItem product={product} key={product.id}
                        AddToCart={AddToCart} />)}
                </div>
            </div>

            <Subscribe/>
        </div>
        
    )
}
export default Products