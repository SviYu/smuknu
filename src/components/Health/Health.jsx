import s from './Health.module.css';
import bgImage from './../../assets/headers/abouthealth.jpg'
import Subscribe from '../Subscribe/Subscribe';
import HealthQuestion from './HealthQuestion';
import { useEffect, useState } from 'react';




const Health = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        /* fetch(`https://smuknu.webmcdm.dk/questions`) */
        fetch('./smuknu/data/questions.json')
            .then((response) => response.json()) //hentes JSON data
            .then((Data => {
                setData(Data);//setData - resultat af det vi hentede før;
                console.log(Data);
            }))
    }, [])


    return (
    <div className={s.section}>
        <div className={s.header}>
                <img className={s.bgImage} src={bgImage} alt="Health" />
                <div className={s.sectionBox}>
                    <h1 className={s.title}>SPØRG OM <br /> SUNDHED</h1>
                    <p className={s.undertitle}>Herunder har vi samlet spørgsmål og svar om sundhed.</p>
                    <p className={s.undertitle}>Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion</p>
                </div>
        </div>
            
        <div className={s.accordionBox}>
                {/* Health Q/A */}

                <ul>
                    {data.map((question, index) => <HealthQuestion question={question} key={index} />)}         
                </ul>

        </div>
            
        <Subscribe/>
            
    </div>
    )
}
export default Health