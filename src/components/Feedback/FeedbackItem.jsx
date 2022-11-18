import { Avatar } from "@mui/material";
import React from "react";
import s from './Feedback.module.css';

const FeedbackItem = ({ feedback }) => {

    return (
        <>
            <div className={s.feedback}>
                <Avatar className={ s.avatar} src={feedback.image} alt='Avatar' sx={{width:150, height:150}}/>
                <p className={ s.description}>{feedback.description}</p>
                <p className={ s.name}>{ feedback.name}</p>
                <p className={ s.byline}>{ feedback.byline}</p>
            </div>
        </>
    )
}
export default FeedbackItem