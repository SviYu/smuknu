import s from './Subscribe.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Subscribe = () => {
    const [feedbackImage, setFeedbackImage] = useState([]);

     /* Getting photos of glad women */
    useEffect(() => {
        fetch(`https://smuknu.webmcdm.dk/reviews`)
            .then((response) => response.json()) //hentes JSON data
            .then((actualData) => {
                setFeedbackImage(actualData); //setData - resultat af det vi hentede før
            })  
    }, []);

    return (
        <div className={s.block}>
        <div className={s.subscribe}>
            <div className={s.subscribeBlock}>
                <h2 className={s.title}>Medlem?</h2>
                <p className={s.text}>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
                <div><Link to='/blivmedlem' className="pinkBtn">Bliv medlem af kundeklubben</Link></div>
            </div>
            <div className={s.photos}>
                {feedbackImage.map((photo) => 
                    <img className={s.photo} src={photo.image} alt="Women" />
                )}
            </div>
            </div>
    </div>
    )
}

export default Subscribe;