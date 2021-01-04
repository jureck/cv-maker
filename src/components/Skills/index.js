import React, { useState } from 'react';
import './index.scss';

import StepInfo from '../StepInfo/index';
import Button from '../Button/index';
import { changeStep } from '../Home/index';

const Skills = ({ skills, setSkills, setIsCompleted }) => {

    const [skill, setSkill] = useState('');
    const [counter, setCounter] = useState(0);

    const saveNewSkill = (counter, setCounter, setSkills, setSkill) => {
        setSkills(oldArr => [
            ...oldArr,
            {
                id: counter,
                skill: skill
            }
        ]);
        setCounter(counter + 1);
        setSkill('');
        switchModal('close');
    }

    const switchModal = (move) => {
        if(move === "open") {
            document.querySelector('.skills__modal').classList.remove('hidden');
        }
        else {
            document.querySelector('.skills__modal').classList.add('hidden');
        }
    }

    const deleteSkill = (id, setCounter, setSkills) => {
        const temp = [...skills];
        const newSkills = temp.filter((skill) => skill.id !== id);
        setSkills([...newSkills]);
        setCounter(0);
    }

    return ( 
        <>

        <main className="skills__container">
            <StepInfo current="6" />
            <p className="work__title">
                Additional skills
            </p>
            <section className="skills__modal hidden">
                <form onSubmit={(e) => e.preventDefault()} className="form">
                    
                    <label htmlFor="skill" className="form__label">Skill</label>
                    <input onChange={(e) => setSkill(e.target.value)} className="form__input" name="skill" value={skill} />
            
                    <section className="form__controls">
                        <span onClick={() => switchModal('close')}>
                            <Button text="Cancel" type="cancel" />
                        </span>
            
                        <span onClick={() => saveNewSkill(counter, setCounter, setSkills, setSkill)}> 
                            <Button text="Done" />
                        </span>
                    </section>
                </form>
            </section>

            {skills.length > 0 && 
            
            skills.map((skill, q) => {
        
            return  <article onClick={() => deleteSkill(q, setCounter, setSkills)} key={q} className="skill__info">
                        <p className="skill__name">
                            {skill.skill}
                        </p>
                    </article>
            })

            }

            <span onClick={() => switchModal('open')} className="plus__button">
            </span>

            <section className="form__controls">
                <span onClick={() => changeStep(6, 'back')}>
                    <Button text="Back" type="cancel" />
                </span>
    
                <span onClick={() => {changeStep(6, 'next'); setIsCompleted(true)}}> 
                    <Button text="Create CV" />
                </span>
            </section>      
        </main>
        
        </>
    );
}
 
export default Skills;