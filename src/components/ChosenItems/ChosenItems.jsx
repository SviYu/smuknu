/* import { useState } from 'react';
import ProductItem from '../Products/ProductItem' */
import { useEffect, useState } from 'react';
import ProductItem from '../Products/ProductItem'
import s from './ChosenItems.module.css'

const ChosenItems = () => {
    const [chosenItem, setChosenItem] = useState([]);

    useEffect(() => {
        fetch('https://smuknu.webmcdm.dk/products')
            .then((response) => response.json())
            .then((productData) => {
                /* filter products with recommended status */
                setChosenItem(productData.filter((chosenItem) => chosenItem.recommended));
                /* console.log('Chosen: ',setChosenItem) */
            })
    }, [])

    return (
        <>
            <div className={s.sectionTwo} id="chosenItems">
                <div className={s.secTwoTitle}>
                    <p>UDVALGT</p>
                    <p className={s.line2}>SKØNHED</p>
                </div>

                <div className={s.wrapper}>
                     {chosenItem.map((item) => <ProductItem product={item} key={item.id }/>)}
                </div>

            </div>
            
        </>
    )
}

export default ChosenItems