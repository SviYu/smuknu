import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import s from './Health.module.css';
import { useState } from 'react';


const HealthQuestion = ({ question }) => {



    return (
        <>
            <Accordion className={s.accordion }>
                    <AccordionSummary
                        className={s.summary}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <QuestionMarkIcon className={s.mark} />
                        <Typography mt={1.5}
                                    mb={1}
                                    fontSize={16}
                                    fontWeight={300}>
                        {question.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={s.details}>
                        <Typography fontSize={14} fontWeight={300}>
                            {question.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion> 

        </>
    )
}
export default HealthQuestion