import React, { useState } from 'react';
import './index.scss';
import StepInfo from '../StepInfo/index';
import PersonalData from '../PersonalData/index';
import Education from '../Education/index';
import WorkExperience from '../WorkExperience/index';
import Languages from '../Languages/index';
import Skills from '../Skills/index';
import Download from '../Download/index';
import { changeStep } from '../Home/index';
import { styles } from '../CvDocument/styles'

const Templates = () => {
    const templatesList = Object.keys(styles);

    const [template, setTemplate] = useState({number: '', color: '#8AAFC3'});
    const [personal, setPersonal] = useState({
        photo: '',
        name: '',
        surname: '',
        city: '',
        phone: '',
        email: ''
    });
    const [schools, setSchools] = useState([]);
    const [works, setWorks] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [skills, setSkills] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);

    const selectColor = (color) => {
        const colors = ['gray', 'green', 'blue', 'yellow', 'brown'];

        let colorCode = '';
        if(color === 'gray') colorCode = '#B5B5B5';
        if(color === 'green') colorCode = '#90C999';
        if(color === 'blue') colorCode = '#91BDC7';
        if(color === 'yellow') colorCode = '#F1F37B';
        if(color === 'brown') colorCode = '#AD8E7D';

        const colorsItems = [];
        colors.map((color) => colorsItems.push(document.querySelector(`#${color}`)));
        for(const color of colorsItems) {
            color.classList.remove('selected');
        }
        document.querySelector(`#${color}`).classList.add('selected');
        setTemplate({...template, color: colorCode});
    }
    
    return (
        <>
            <main className="templates__container">
                <StepInfo current="1" />
                <p className="templates__title">
                    Choose template
                </p>
                {templatesList.map((tem, q) => {
                    if(q === 1) return (
                        <React.Fragment key={q}>
        
                            <img key={q} onClick={() => { setTemplate({...template, number: tem}); changeStep(1, 'next') }} src={require(`../../assets/templates/template_${tem}.PNG`)} alt={`template_${tem}`} className="templates__img"/>
                            
                            <div className="templates__colors">
                                <div onClick={() => selectColor('gray')} id="gray" className="templates__color selected" />
                                <div onClick={() => selectColor('green')} id="green" className="templates__color" />
                                <div onClick={() => selectColor('blue')} id="blue" className="templates__color" />
                                <div onClick={() => selectColor('yellow')} id="yellow" className="templates__color" />
                                <div onClick={() => selectColor('brown')} id="brown" className="templates__color" />
                            </div>

                        </React.Fragment>
                    ); else return (
                    <img key={q} onClick={() => { setTemplate({...template, number: tem}); changeStep(1, 'next') }} src={require(`../../assets/templates/template_${tem}.PNG`)} alt={`template_${tem}`} className="templates__img"/>
                    )
                })}
                
            </main>
            <PersonalData 
                personal={personal}
                setPersonal={setPersonal}   
            />
            <Education 
                schools={schools}
                setSchools={setSchools}
            />
            <WorkExperience 
                works={works}
                setWorks={setWorks}
            />
            <Languages 
                languages={languages}
                setLanguages={setLanguages}
            />
            <Skills 
                skills={skills}
                setSkills={setSkills}
                setIsCompleted={setIsCompleted}
            />

          { isCompleted &&  <Download 
                template={template}
                personal={personal}
                schools={schools}
                works={works}
                languages={languages}
                skills={skills}
            />}
           
        </>
    );
}
 
export default Templates;