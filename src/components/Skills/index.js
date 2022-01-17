import React, { useState } from 'react';
import './index.scss';

import StepInfo from '../StepInfo/index';
import Button from '../Button/index';

const Skills = ({ skills, setSkills, changeStep, setIsCompleted }) => {

    const [skill, setSkill] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const saveNewSkill = () => {
        setSkills(oldArr => [
            ...oldArr,
            {
                id: Math.random(),
                skill: skill
            }
        ]);
        setSkill('');
        setIsModalVisible(!isModalVisible);
    }

    const deleteSkill = (id) => {
        const newSkills = skills.filter((skill) => skill.id !== id);
        setSkills([...newSkills]);
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
                        <span onClick={() => setIsModalVisible(!isModalVisible)}>
                            <Button text="Cancel" type="cancel" />
                        </span>
            
                        <span onClick={saveNewSkill}> 
                            <Button text="Done" />
                        </span>
                    </section>
                </form>
            </section>

            {skills.length > 0 && 
            
            skills.map((skill, q) => {
        
            return  <article onClick={() => deleteSkill(skill.id)} key={q} className="skill__info">
                        <p className="skill__name">
                            {skill.skill}
                        </p>
                    </article>
            })

            }

            <span onClick={() => setIsModalVisible(!isModalVisible)} className="plus__button">
            </span>

            <section className="form__controls">
                <span onClick={() => changeStep(6)}>
                    <Button text="Back" type="cancel" />
                </span>
    
                <span onClick={() => {changeStep(6, true); setIsCompleted(true)}}> 
                    <Button text="Create CV" />
                </span>
            </section>      
        </main>
        
        </>
    );
}
 
export default Skills;