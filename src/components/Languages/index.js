import React, { useState } from 'react';
import './index.scss';

import StepInfo from '../StepInfo/index';
import Button from '../Button/index';

const Languages = ({ languages, setLanguages, changeStep }) => {

    const [language, setLanguage] = useState('');
    const [level, setLevel] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const saveNewLanguage = () => {
        setLanguages(oldArr => [
            ...oldArr,
            {
                id: Math.random(),
                language: language,
                level: level
            }
        ]);
        setLanguage('');
        setLevel('');
        setIsModalVisible(!isModalVisible);
    }

    const deleteLanguage = (id) => {
        const newLanguages = languages.filter((language) => language.id !== id);
        setLanguages([...newLanguages]);
    }

    return ( 
        <>

        <main className="languages__container">
            <StepInfo current="5"/>
            <p className="work__title">
                Languages
            </p>
            <section className={`languages__modal ${isModalVisible ? "" : "hidden"}`}>
                <form onSubmit={(e) => e.preventDefault()} className="form">
                    
                    <label htmlFor="language" className="form__label">Language</label>
                    <input onChange={(e) => setLanguage(e.target.value)} className="form__input" name="language" value={language} />

                    <label htmlFor="level" className="form__label">Level of knowledge</label>
                    <input onChange={(e) => setLevel(e.target.value)} className="form__input" name="level" value={level} />

                   
                    <section className="form__controls">
                        <span onClick={() => setIsModalVisible(!isModalVisible)}>
                            <Button text="Cancel" type="cancel" />
                        </span>
            
                        <span onClick={saveNewLanguage}> 
                            <Button text="Done" />
                        </span>
                    </section>
                </form>
            </section>

            {languages.length > 0 && 
            
            languages.map((language, q) => {
        
            return  <article onClick={() => deleteLanguage(language.id)} key={q} className="language__info">
                        <p className="language__name">
                            {language.language}
                        </p>
                        <p className="language__level">
                            {language.level}
                        </p>
                    </article>
            })

            }

            <span onClick={() => setIsModalVisible(!isModalVisible)} className="plus__button">
            </span>

            <section className="form__controls">
                <span onClick={() => changeStep(5)}>
                    <Button text="Back" type="cancel" />
                </span>
    
                <span onClick={() => changeStep(5, true)}> 
                    <Button text="Next step" />
                </span>
            </section>
        </main>
        </>
    );
}
 
export default Languages;