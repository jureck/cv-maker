import React, { useState } from 'react';
import './index.scss';

import StepInfo from '../StepInfo/index';
import Button from '../Button/index';
import { changeStep } from '../Home/index';

const Languages = ({ languages, setLanguages }) => {

    
    const [language, setLanguage] = useState('');
    const [level, setLevel] = useState('');
    const [counter, setCounter] = useState(0);

    const saveNewLanguage = (counter, setCounter, setLanguages, setLanguage, setLevel) => {
        setLanguages(oldArr => [
            ...oldArr,
            {
                id: counter,
                language: language,
                level: level
            }
        ]);
        setCounter(counter + 1);
        setLanguage('');
        setLevel('');
        switchModal('close');
    }

    const switchModal = (move) => {
        if(move === "open") {
            document.querySelector('.languages__modal').classList.remove('hidden');
        }
        else {
            document.querySelector('.languages__modal').classList.add('hidden');
        }
    }

    const deleteLanguage = (id, setCounter, setLanguages) => {
        const temp = [...languages];
        const newLanguages = temp.filter((language) => language.id !== id);
        setLanguages([...newLanguages]);
        setCounter(0);
    }

    return ( 
        <>

        <main className="languages__container">
            <StepInfo current="5"/>
            <p className="work__title">
                Languages
            </p>
            <section className="languages__modal hidden">
                <form onSubmit={(e) => e.preventDefault()} className="form">
                    
                    <label htmlFor="language" className="form__label">Language</label>
                    <input onChange={(e) => setLanguage(e.target.value)} className="form__input" name="language" value={language} />

                    <label htmlFor="level" className="form__label">Level of knowledge</label>
                    <input onChange={(e) => setLevel(e.target.value)} className="form__input" name="level" value={level} />

                   
                    <section className="form__controls">
                        <span onClick={() => switchModal('close')}>
                            <Button text="Cancel" type="cancel" />
                        </span>
            
                        <span onClick={() => saveNewLanguage(counter, setCounter, setLanguages, setLanguage, setLevel)}> 
                            <Button text="Done" />
                        </span>
                    </section>
                </form>
            </section>

            {languages.length > 0 && 
            
            languages.map((language, q) => {
        
            return  <article onClick={() => deleteLanguage(q, setCounter, setLanguages)} key={q} className="language__info">
                        <p className="language__name">
                            {language.language}
                        </p>
                        <p className="language__level">
                            {language.level}
                        </p>
                    </article>
            })

            }

            <span onClick={() => switchModal('open')} className="plus__button">
            </span>

            <section className="form__controls">
                <span onClick={() => changeStep(5, 'back')}>
                    <Button text="Back" type="cancel" />
                </span>
    
                <span onClick={() => changeStep(5, 'next')}> 
                    <Button text="Next step" />
                </span>
            </section>
        </main>
        </>
    );
}
 
export default Languages;