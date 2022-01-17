import React, { useState } from 'react';
import './index.scss';

import Templates from '../Templates/index';
import Button from '../Button/index';

import PersonalData from '../PersonalData/index';
import Education from '../Education/index';
import WorkExperience from '../WorkExperience/index';
import Languages from '../Languages/index';
import Skills from '../Skills/index';
import Download from '../Download/index';

const Home = ({ changeStep }) => {

    const [template, setTemplate] = useState({});
    const [personal, setPersonal] = useState({
        name: "",
        surname: "",
        city: "",
        phone: "",
        email: "",
        photo: "",
    });
    const [schools, setSchools] = useState([]);
    const [works, setWorks] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [skills, setSkills] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);

    return ( 
        <>
            <main className="home__container">
                <p className="hero__text">
                    Create your own CV with our templates!
                </p>
                <span onClick={() => changeStep(0, true)} >
                    <Button text="Start now" />
                </span>
                <p className="invite__text">
                    No programms needed.
                </p>
                <p className="invite__text">
                    Easy in use.
                </p>
                <p className="invite__text">
                    PDF format.
                </p>
            </main>
            <Templates 
                template={template}
                setTemplate={setTemplate}
                changeStep={changeStep}
            />
            <PersonalData 
                personal={personal}
                setPersonal={setPersonal}
                changeStep={changeStep}   
            />
            <Education 
                schools={schools}
                setSchools={setSchools}
                changeStep={changeStep}
            />
            <WorkExperience 
                works={works}
                setWorks={setWorks}
                changeStep={changeStep}
            />
            <Languages 
                languages={languages}
                setLanguages={setLanguages}
                changeStep={changeStep}
            />
            <Skills 
                skills={skills}
                setSkills={setSkills}
                setIsCompleted={setIsCompleted}
                changeStep={changeStep}
            />

          { isCompleted &&  <Download 
                template={template}
                personal={personal}
                schools={schools}
                works={works}
                languages={languages}
                skills={skills}
                changeStep={changeStep}
            />}
        </>
    );
}
 
export default Home;