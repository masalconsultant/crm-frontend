import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from '../../components/login/Login.comp';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

import './entry.style.css';




export const Entry = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [frmLoad, setFrmLoad] = useState('login');


const handleOnChange = e => {
    const { name, value} =e.target;
    switch(name) {
        case 'email':
            setEmail(value)
            break

            case 'password':
                setPassword(value)
                break

            default:
                break
    }    
};

const handleOnSubmit = (e) => {
    e.eventDefault();
    if(!email || !password) {
       return alert("please enter the email");
    }
   //TO DO CALL api to submit the form
    console.log(email, password);
};

const handleOnResetSubmit = (e) => {
    e.eventDefault();
    if(!email) {
       return alert("please enter the email");
    }
   //TO DO CALL api to submit the form
    console.log(email);

};

const formSwitcher = (frmtype) => {
    setFrmLoad(frmtype);
};

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {frmLoad === "login" && (
                 <LoginForm  
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                    password={password}
              />
            )}

            {frmLoad === "reset" && (
                <ResetPassword 
                handleOnChange={handleOnChange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                email={email}
                
          />

            )}
               
            </Jumbotron>
         
        </div>
    );
};

