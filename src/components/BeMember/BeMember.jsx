import s from './BeMember.module.css';
import sectionBg from './../../assets/headers/subscribers.jpg';
import { useState } from 'react';
import answerImg from './../../assets/headers/products.jpg';
import { useForm } from 'react-hook-form';



const BeMember = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
        } = useForm({
            mode: "onBlur"
        });
    
    const [navn, setNavn] = useState('');
    const [email, setEmail] = useState('');
    const [besked, setBesked] = useState('');
    const [answer, setAnswer] = useState('');


    const dataToSubmit = {
        "name": navn,
        "email": email,
        "message": besked,
    };
    
    const submitForm = () => {

        /* Answer */
        setAnswer(
            <div className={s.answerBlock}>
                <h1 className={s.anwertitle}>TAK!</h1>
                <p className={s.answerName}>{navn}</p>
                <p className={s.answerText}>Vi er enormt glade for at få dig som medlem.</p>
                <img className={s.answerImg} src={ answerImg } alt="Produkt" />
                <p className={s.answerText}>Kig I din inbox vi har sendt en lille velkomst gave.</p>
                <a className="pinkBtn" href="/#top">Til Forsiden</a>
            </div>
        )
        
        /* adding a member to subscriber's list */
        fetch('https://smuknu.webmcdm.dk/subscribe', {
            method: "POST",
            body: JSON.stringify(dataToSubmit),
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }
        }).then(res => res.json())
            .then((response) => console.log(response));
        
    }
 
    return (
    <>
        <div className={s.sectionTop}>
            <img className={s.sectionBg} src={sectionBg} alt="Header background" />
            <div className={s.sectionBox}>
                <h1 className={s.title}>BLIV MEDLEM</h1>
                <p className={s.subtitle}>Opret dig som medlem og få flere fordele og nyheder I det øjeblik vi har dem.</p>
                <p className={s.subtitle}>Send gerne ris eller ros med når du melder dig ind, vi er altid parate til dialog.</p>
            </div>
        </div>
            {/* Submitting form */}
            <div className={s.sectionBottom}>
                <form  onSubmit={handleSubmit(submitForm)} id="form" method='post'>
                    <label className={s.formName}>
                        <span className={s.formLabel}>Fulde navn</span> 
                        <input  className={s.input}
                                {...register('name', {
                                    required: true
                                })}
                                value={navn}
                                onChange={(e) => setNavn(e.target.value)}/>
                    </label>
                    <div className={s.errorText}>{errors?.name && <p>*Navnet skal udfyldes</p>}</div> 
                    
                    <label className={s.formName}>
                        <span className={s.formLabel}>E-mail</span>
                        <input  className={s.input}
                                {...register('email', {
                                    required: "*Email skal udfyldes",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "*Invalid email address"
                                    }
                                })}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <div className={s.errorText}>{errors?.email?.message}</div> 
                    
                    <label className={s.formName}>
                        <span className={s.formLabel}>Ris og/eller ros</span>
                        <textarea className={s.textarea}
                            type="text"
                            {...register('message', { required: true })}
                            value={besked}
                            onChange={(e) => setBesked(e.target.value)}></textarea>
                    </label>
                    <div className={s.errorText}>{errors?.message && <p>*Vi beder jer at skrive noget...</p>}</div>

                    <input type='submit' className={s.button} value="Opret"/>
                </form>

                    {answer}
            </div>
     </>
    )
}

export default BeMember;