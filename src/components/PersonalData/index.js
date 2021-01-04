import React from 'react';
import './index.scss';
import { changeStep } from '../Home/index';

import StepInfo from '../StepInfo/index';
import Button from '../Button/index';

const PersonalData = ({ personal, setPersonal }) => {

       

    const setPhoto = (e, setPersonal, personal) => {
        if(e.target) {
            const file = e.target.files[0];
            const photoName = e.target.files[0].name;
            const reader = new FileReader();
            document.querySelector('.photo__name').innerHTML = `Uploaded (${photoName.slice(0, 20)}${photoName.length>20 ? "..." : ""})`;
            reader.onload = (e) => {
                setPersonal({...personal, photo: e.target.result});
            };
            reader.readAsDataURL(file);
        }
    }

    const checkValidity = () => {

        const name = document.querySelector('input[name="name"]');
        const surname = document.querySelector('input[name="surname"]');
        const phone = document.querySelector('input[name="phone"]');

        const nameError =  document.querySelector('#nameError');
        const surnameError =  document.querySelector('#surnameError');
        const phoneError =  document.querySelector('#phoneError');
        
        nameError.classList.add('hidden');
        surnameError.classList.add('hidden');
        phoneError.classList.add('hidden');

        name.classList.remove('error');
        surname.classList.remove('error');
        phone.classList.remove('error');

        if(!name.value) {
            name.classList.add('error');
            nameError.classList.remove('hidden');
        }
        if(!surname.value) {
            surname.classList.add('error');
            surnameError.classList.remove('hidden');
        }
        if(!phone.value) {
            phone.classList.add('error');
            phoneError.classList.remove('hidden');
        }
        if(name.value && surname.value && phone.value) {
            changeStep(2, 'next');
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
                    </p>
                    <input onChange={(e) => setPhoto(e, setPersonal, personal)} className="form__input hidden" type="file" id="photo" accept="image/png, image/jpeg" />
                    
                    <label htmlFor="name" className="form__label">Name</label>
                    <input onChange={(e) => setPersonal({...personal, [e.target.name]: e.target.value})} className="form__input" name="name" value={personal.name} />
                    <p id="nameError" className="form__input-error hidden">This field is required</p>

                    <label htmlFor="surname" className="form__label">Surname</label>
                    <input onChange={(e) => setPersonal({...personal, [e.target.name]: e.target.value})} className="form__input" name="surname" value={personal.surname}/>
                    <p id="surnameError" className="form__input-error hidden">This field is required</p>

                    <label htmlFor="city" className="form__label">City</label>
                    <input onChange={(e) => setPersonal({...personal, [e.target.name]: e.target.value})} className="form__input" name="city" value={personal.city}/>

                    <label htmlFor="phone" className="form__label">Phone number</label>
                    <input onChange={(e) => setPersonal({...personal, [e.target.name]: e.target.value})} type="number" className="form__input" name="phone" max="999999999" value={personal.phone}/>
                    <p id="phoneError" className="form__input-error hidden">This field is required</p>

                    <label htmlFor="email" className="form__label">Email</label>
                    <input onChange={(e) => setPersonal({...personal, [e.target.name]: e.target.value})} type="email" className="form__input" name="email" value={personal.email}/>
                </form>

                <section className="form__controls">
                    <span onClick={() => changeStep(2, 'back')}>
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