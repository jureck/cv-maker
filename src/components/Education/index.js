import React, { useState } from 'react';
import './index.scss';

import getYearsFromRange from '../../utils/getYearsFromRange';
import StepInfo from '../StepInfo/index';
import Button from '../Button/index';

const Education = ({ schools, setSchools, changeStep}) => {

    const [schoolName, setSchoolName] = useState('');
    const [major, setMajor] = useState('');
    const [schoolYears, setSchoolYears] = useState({
        from: '',
        to: ''
    });
    const [isModalVisible, setIsModalVisible] = useState(false);

    const saveNewSchool = () => {
        setSchools(oldArr => [
            ...oldArr,
            {
                id: Math.random(),
                name: schoolName,
                major: major,
                from: schoolYears.from,
                to: schoolYears.to
            }
        ]);
        setSchoolName('');
        setSchoolYears('');
        setMajor('');
        setSchoolYears({
            from: '',
            to: ''
        });
        setIsModalVisible(!isModalVisible);
    }

    const deleteSchool = (id) => {
        const newSchools = schools.filter((school) => school.id !== id);
        setSchools([...newSchools]);
    }

    const years = getYearsFromRange(1950, new Date().getFullYear());

    return ( 
        <>

        <main className="education__container">
            <section className={`education__modal ${isModalVisible ? "" : "hidden"}`}>
                <form onSubmit={(e) => e.preventDefault()} className="form">
                    
                    <label htmlFor="schoolname" className="form__label">School name</label>
                    <input onChange={(e) => setSchoolName(e.target.value)} className="form__input" name="schoolname" value={schoolName} />

                    <label htmlFor="major" className="form__label">Major</label>
                    <input onChange={(e) => setMajor(e.target.value)} className="form__input" name="major" value={major} />

                    <label htmlFor="from" className="form__label">Education years</label>
                    <section className="school__years">
                        <select onChange={(e) => setSchoolYears({...schoolYears, [e.target.name]: e.target.value})} className="form__input" name="from" value={schoolYears.from}>
                            {years.map((year, q) => {
                                return <option key={q} value={year}>{year}</option>
                            })}
                        </select>
                        <select onChange={(e) => setSchoolYears({...schoolYears, [e.target.name]: e.target.value})} className="form__input" name="to" value={schoolYears.to}>
                            {years.map((year, q) => {
                                return <option key={q} value={year}>{year}</option>
                            })}
                        </select>

                    </section>
                    <section className="form__controls">
                        <span onClick={() => setIsModalVisible(!isModalVisible)}>
                            <Button text="Cancel" type="cancel" />
                        </span>
            
                        <span onClick={saveNewSchool}> 
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
        
            return  <article onClick={() => deleteSchool(school.id)} key={q} className="school">
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
            <span onClick={() => setIsModalVisible(!isModalVisible)} className="plus__button">
            </span>
            <section className="form__controls">
                <span onClick={() => changeStep(3)}>
                    <Button text="Back" type="cancel" />
                </span>
    
                <span onClick={() => changeStep(3, true)}> 
                    <Button text="Next step" />
                </span>
            </section>
        </main>

        </>
    );
}
 
export default Education;