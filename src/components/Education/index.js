import React, {useState} from 'react';
import './index.scss';

import StepInfo from '../StepInfo/index';
import Button from '../Button/index';
import { changeStep } from '../Home/index';


export const getYearsForSelect = (from, to) => {
    const years =  [' '];
    for(let i = from; i <= to; i++) {
        years.push(i);
    }
    return years;
}

const Education = ({ schools, setSchools}) => {

    const [schoolName, setSchoolName] = useState('');
    const [major, setMajor] = useState('');
    const [schoolYears, setSchoolYears] = useState({
        from: '',
        to: ''
    });
    const [counter, setCounter] = useState(0);


    const saveNewSchool = (counter, setCounter, schoolName, major, schoolYears, setSchools, setSchoolName, setSchoolYears, setMajor) => {
        setSchools(oldArr => [
            ...oldArr,
            {
                id: counter,
                name: schoolName,
                major: major,
                from: schoolYears.from,
                to: schoolYears.to
            }
        ]);
        setCounter(counter + 1);
        setSchoolName('');
        setSchoolYears('');
        setMajor('');
        switchModal('close');
    }

    const deleteSchool = (id, setCounter, setSchools) => {
        const temp = [...schools];
        const newSchools = temp.filter((school) => school.id !== id);
        setSchools([...newSchools]);
        setCounter(0);
    }

    const switchModal = (move) => {
        if(move === "open") {
            document.querySelector('.education__modal').classList.remove('hidden');
        }
        else {
            document.querySelector('.education__modal').classList.add('hidden');
        }
    }

    const years = getYearsForSelect(1950, new Date().getFullYear());

    return ( 
        <>

        <main className="education__container">
            <section className="education__modal hidden">
                <form onSubmit={(e) => e.preventDefault()} className="form">
                    
                    <label htmlFor="schoolname" className="form__label">School name</label>
                    <input onChange={(e) => setSchoolName(e.target.value)} className="form__input" name="schoolname" value={schoolName} />

                    <label htmlFor="major" className="form__label">Major</label>
                    <input onChange={(e) => setMajor(e.target.value)} className="form__input" name="major" value={major} />

                    <label htmlFor="from" className="form__label">Education years</label>
                    <section className="school__years">
                        <select onChange={(e) => setSchoolYears({...schoolYears, [e.target.name]: e.target.value})} className="form__input" name="from" >
                            {years.map((year, q) => {
                                return <option key={q} value={year}>{year}</option>
                            })}
                        </select>
                        <select onChange={(e) => setSchoolYears({...schoolYears, [e.target.name]: e.target.value})} className="form__input" name="to" >
                            {years.map((year, q) => {
                                return <option key={q} value={year}>{year}</option>
                            })}
                        </select>

                    </section>
                    <section className="form__controls">
                        <span onClick={() => switchModal('close')}>
                            <Button text="Cancel" type="cancel" />
                        </span>
            
                        <span onClick={() => saveNewSchool(counter, setCounter, schoolName, major, schoolYears, setSchools, setSchoolName, setSchoolYears, setMajor)}> 
                            <Button text="Done" />
                        </span>
                    </section>
                </form>
                
            </section>
            <StepInfo current="3"/>
            <p className="education__title">
                Education
            </p>
            {schools.length > 0 && 
            
            schools.map((school, q) => {
        
            return  <article onClick={() => deleteSchool(q, setCounter, setSchools)} key={q} className="school">
                        <p className="school__years-info">
                            <span className="years-from">{school.from} - </span>
                            <span className="years-to">{school.to}</span>
                        </p>
                        <p className="school__major">
                            {school.major}
                        </p>
                        <p className="school__name">
                            {school.name}
                        </p>
                    </article>
            })

            }
            <span onClick={() => switchModal('open')} className="plus__button">
            </span>
            <section className="form__controls">
                <span onClick={() => changeStep(3, 'back')}>
                    <Button text="Back" type="cancel" />
                </span>
    
                <span onClick={() => changeStep(3, 'next')}> 
                    <Button text="Next step" />
                </span>
            </section>
        </main>

        </>
    );
}
 
export default Education;