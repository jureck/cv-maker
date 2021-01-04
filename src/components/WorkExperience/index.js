import React, { useState } from 'react';
import './index.scss'

import StepInfo from '../StepInfo/index';
import { getYearsForSelect } from '../Education/index';
import Button from '../Button/index';
import { changeStep } from '.././Home/index';

const WorkExperience = ({ works, setWorks }) => {

    
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [workDate, setWorkDate] = useState({
        monthFrom: '',
        yearFrom: '',
        monthTo: '',
        yearTo: ''
    });
    const [counter, setCounter] = useState(0);

    const years = getYearsForSelect(1960, new Date().getFullYear());
    const months = [' ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


    const saveNewCompany = (counter, setCounter, companyName, position, workDate, setWorks, setCompanyName, setWorkDate, setPosition) => {
        setWorks(oldArr => [
            ...oldArr,
            {
                id: counter,
                name: companyName,
                position: position,
                monthFrom: workDate.monthFrom,
                yearFrom: workDate.yearFrom,
                monthTo: workDate.monthTo,
                yearTo: workDate.yearTo
            }
        ]);
        setCounter(counter + 1);
        setCompanyName('');
        setWorkDate('');
        setPosition('');
        switchModal('close');
    }

    const deleteCompany = (id, setCounter, setWorks) => {
        const temp = [...works];
        const newWorks = temp.filter((work) => work.id !== id);
        setWorks([...newWorks]);
        setCounter(0);
    }

    const switchModal = (move) => {
        if(move === "open") {
            document.querySelector('.work__modal').classList.remove('hidden');
        }
        else {
            document.querySelector('.work__modal').classList.add('hidden');
        }
    }


    return ( 
        <>

        <main className="work__container">
            <StepInfo current="4"/>
            <p className="work__title">
                Work experience
            </p>
            <section className="work__modal hidden">
                <form onSubmit={(e) => e.preventDefault()} className="form">
                    
                    <label htmlFor="companyname" className="form__label">Company name</label>
                    <input onChange={(e) => setCompanyName(e.target.value)} className="form__input" name="companyname" value={companyName} />

                    <label htmlFor="position" className="form__label">Position</label>
                    <input onChange={(e) => setPosition(e.target.value)} className="form__input" name="position" value={position} />

                    <label htmlFor="monthFrom" className="form__label">Start date</label>
                    <section className="work__start">
                        <select onChange={(e) => setWorkDate({...workDate, [e.target.name]: e.target.value})} className="form__input" name="monthFrom" >
                            {months.map((month, q) => {
                                return <option key={q} value={month}>{month}</option>
                            })}
                        </select>
                        <select onChange={(e) => setWorkDate({...workDate, [e.target.name]: e.target.value})} className="form__input" name="yearFrom" >
                            {years.map((year, q) => {
                                return <option key={q} value={year}>{year}</option>
                            })}
                        </select>
                    </section>
                    
                    <label htmlFor="monthTo" className="form__label">End date</label>
                    <section className="work__end">
                        <select onChange={(e) => setWorkDate({...workDate, [e.target.name]: e.target.value})} className="form__input" name="monthTo" >
                            {months.map((month, q) => {
                                return <option key={q} value={month}>{month}</option>
                            })}
                        </select>
                        <select onChange={(e) => setWorkDate({...workDate, [e.target.name]: e.target.value})} className="form__input" name="yearTo" >
                            {years.map((year, q) => {
                                return <option key={q} value={year}>{year}</option>
                            })}
                        </select>
                    </section>
                    <section className="form__controls">
                        <span onClick={() => switchModal('close')}>
                            <Button text="Cancel" type="cancel" />
                        </span>
            
                        <span onClick={() => saveNewCompany(counter, setCounter, companyName, position, workDate, setWorks, setCompanyName, setWorkDate, setPosition)}> 
                            <Button text="Done" />
                        </span>
                    </section>
                </form>
                
            </section>

            {works.length > 0 && 
            
            works.map((work, q) => {
        
            return  <article onClick={() => deleteCompany(q, setCounter, setWorks)} key={q} className="school">
                        <p className="school__years-info">
                            <span className="years-from">{`${work.monthFrom}/${work.yearFrom}`} - </span>
                            <span className="years-to">{`${work.monthTo}/${work.yearTo}`}</span>
                        </p>
                        <p className="school__major">
                            {work.position}
                        </p>
                        <p className="school__name">
                            {work.name}
                        </p>
                    </article>
            })

            }
            <span onClick={() => switchModal('open')} className="plus__button">
            </span>

            <section className="form__controls">
                <span onClick={() => changeStep(4, 'back')}>
                    <Button text="Back" type="cancel" />
                </span>
    
                <span onClick={() => changeStep(4, 'next')}> 
                    <Button text="Next step" />
                </span>
            </section>
        </main>

        </>
    );
}
 
export default WorkExperience;