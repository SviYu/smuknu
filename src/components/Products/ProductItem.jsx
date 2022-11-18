import s from './Products.module.css';


const ProductItem = ({ product, AddToCart }) => {

    return (
        <>
            <div className={s.card}>
                <img className={s.image} src={product.image} alt="Product" />
                
                {/* Shows DiscountInPercent, if it is actually there */}
                {product.discountInPercent ? 
                    <div className={s.badge}>
                        <span className={s.spar}>SPAR</span>
                        <span className={s.discount}>{product.discountInPercent}%</span>
                    </div> : ''
                }

                <div className={s.description}>
                    <p className={s.productTitle}>
                        {product.title}
                    </p>
                    <div className={s.cardBottom}>
                        <p className={s.price}>
                            {product.price},00 kr.
                        </p>
                        <button className={s.buyBtn} onClick={AddToCart}>KØB</button>
                    
                    </div>
                </div>
            </div>
        </>
    )  
}
export default ProductItem