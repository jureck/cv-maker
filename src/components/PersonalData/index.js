import React, { useState, useRef } from 'react';
import './index.scss';

import StepInfo from '../StepInfo/index';
import Button from '../Button/index';

const PersonalData = ({ personal, setPersonal, changeStep }) => {

    const [photoName, setPhotoName] = useState("");

    const [isNameError, setIsNameError] = useState(false);
    const [isSurnameError, setIsSurnameError] = useState(false);
    const [isPhoneError, setIsPhoneError] = useState(false);

    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const phoneRef = useRef(null);
    
    const setPhoto = (e) => {
        if(e.target) {
            const file = e.target.files[0];
            const photoName = e.target.files[0].name;
            const reader = new FileReader();
            setPhotoName(`Uploaded (${photoName.slice(0, 20)}${photoName.length>20 ? "..." : ""})`);
            reader.onload = (e) => {
                setPersonal({...personal, photo: e.target.result});
            };
            reader.readAsDataURL(file);
        }
    }

    const checkValidity = () => {
        if(!nameRef.current.value) {
            setIsNameError(true);
        }
        if(!surnameRef.current.value) {
            setIsSurnameError(true);
        }
        if(!phoneRef.current.value) {
            setIsPhoneError(true);
        }
        if(nameRef.current.value && surnameRef.current.value && phoneRef.current.value) {
            changeStep(2, true);
        }
    }
    
    return ( 
        <>
            <main className="personal__container">
                <StepInfo current="2" />
                <p className="personal__title">
                    Personal data
                </p>
                <form className="form">
                    <p className="form__label">Your photo</p>
                    <label htmlFor="photo" className="photo__input">
                        Click here to upload
                    </label>
                    <p className="photo__name">
                        {photoName}
                    </p>
                    <input onChange={(e) => setPhoto(e, setPersonal, personal)} className="form__input hidden" type="file" id="photo" accept="image/png, image/jpeg" />
                    
                    <label htmlFor="name" className="form__label">Name</label>
                    <input ref={nameRef} onChange={(e) => setPersonal({...personal, [e.target.name]: e.target.value})} className={`form__input ${isNameError ? "error" : ""}`} name="name" value={personal.name} />
                    <p id="nameError" className={`form__input-error ${isNameError ? "" : "hidden"}`}>This field is required</p>

                    <label htmlFor="surname" className="form__label">Surname</label>
                    <input ref={surnameRef} onChange={(e) => setPersonal({...personal, [e.target.name]: e.target.value})} className={`form__input ${isSurnameError ? "error" : ""}`} name="surname" value={personal.surname}/>
                    <p id="surnameError" className={`form__input-error ${isSurnameError ? "" : "hidden"}`}>This field is required</p>

                    <label htmlFor="city" className="form__label">City</label>
                    <input onChange={(e) => setPersonal({...personal, [e.target.name]: e.target.value})} className="form__input" name="city" value={personal.city}/>

                    <label htmlFor="phone" className="form__label">Phone number</label>
                    <input ref={phoneRef} onChange={(e) => setPersonal({...personal, [e.target.name]: e.target.value})} type="number" className={`form__input ${isPhoneError ? "error" : ""}`} name="phone" max="999999999" value={personal.phone}/>
                    <p id="phoneError" className={`form__input-error ${isPhoneError ? "" : "hidden"}`}>This field is required</p>

                    <label htmlFor="email" className="form__label">Email</label>
                    <input onChange={(e) => setPersonal({...personal, [e.target.name]: e.target.value})} type="email" className="form__input" name="email" value={personal.email}/>
                </form>

                <section className="form__controls">
                    <span onClick={() => changeStep(2)}>
                        <Button text="Back" type="cancel" />
                    </span>
        
                    <span onClick={checkValidity}> 
                        <Button text="Next step" />
                    </span>
                </section>
            </main>
        </>
    );
}
 
export default PersonalData;