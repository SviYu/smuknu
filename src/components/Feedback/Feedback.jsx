import React, { useEffect, useState } from 'react';
import s from './Feedback.module.css';
import FeedbackItem from './FeedbackItem';


const Feedback = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        /* fetch(`https://smuknu.webmcdm.dk/reviews`) */
        fetch('./data/rewiews.json')
            .then((response) => response.json()) //hentes JSON data
            .then((actualData) => {
                setData(actualData); //setData - resultat af det vi hentede før
                /* console.log(actualData) */
            }
            )  
    }, []);


    return (
        <>
         <div className={s.sectionThree}>
            <div className={s.secThreeTitle}>
                <p className={s.line1}>SKØNHEDER</p>
                <p>UDTALER</p>
            </div>  
        </div>
            
            {/* FeedbackItem */}
            {data.map((feedback, idx) => <FeedbackItem feedback={feedback} key={idx} />)}
        </>
    )
    
}

export default Feedback;