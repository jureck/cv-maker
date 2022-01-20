import React, { useState } from 'react';
import './index.scss';
import StepInfo from '../StepInfo/index';
import { styles } from '../CvDocument/styles'

const Templates = ({ setTemplate, template, changeStep }) => {
    const templatesList = Object.keys(styles);

    const colors = {
        'gray': "#e6e6e6", 
        'green': "#90C999", 
        'blue': "#91BDC7", 
        'yellow': "#F1F37B", 
        'brown': "#AD8E7D",
    };

    const [selectedColor, setSelectedColor] = useState("gray");

    const selectColor = (color) => {
        setSelectedColor(color);
        let colorCode = colors[color];
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
        
                            <img key={q} onClick={() => { setTemplate({...template, number: tem}); changeStep(1, true) }} src={require(`../../assets/templates/template_${tem}.PNG`)} alt={`template_${tem}`} className="templates__img"/>
                            
                            <div className="templates__colors">
                                {Object.keys(colors).map((color) => {
                                    return <div
                                        key={color} 
                                        onClick={() => selectColor(color)} 
                                        id={color} 
                                        className={`templates__color ${selectedColor === color ? "selected" : ""}`} 
                                    />
                                })}
                            </div>

                        </React.Fragment>
                    ); else return (
                    <img key={q} onClick={() => { setTemplate({...template, number: tem}); changeStep(1, true) }} src={require(`../../assets/templates/template_${tem}.PNG`)} alt={`template_${tem}`} className="templates__img"/>
                    )
                })}
                
            </main>
            
           
        </>
    );
}
 
export default Templates;