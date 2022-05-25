import React from 'react';
import './SignUp.css'

function SignUp(props){
    const handleSubmit =(event) =>{
        event.preventDefault();
        const login = event.target.querySelector("input[placeholder='Input your username']").value;
        const password = event.target.querySelector("input[placeholder='Input your password']").value;
        const firstname = event.target.querySelector("input[placeholder='Input your username']").value;
        const lastname = event.target.querySelector("input[placeholder='Input your lastname']").value;
        const photo = event.target.querySelector("input[placeholder='Input your photo']").value;
        const status = event.target.querySelector("input[placeholder='Input your status']").value;

        props.addUser(login, password, firstname, lastname, photo, status)

        
    }
    return(
        <div className='signUp'>
            <div className='frame-signup'>
                <h3></h3>
                <h2 className='signUpWord'>Sign up</h2>
                <form onSubmit={handleSubmit} >
                    <input className="sign-up-input" type='text' placeholder='Input your username'/>
                    <input className="sign-up-input" type='password' placeholder='Input your password'/>
                    <input className="sign-up-input" type='password' placeholder='Repeat your password'/>
                    <input className="sign-up-input" type='text' placeholder='Input your firstname'/>
                    <input className="sign-up-input" type='text' placeholder='Input your lastname'/>
                    <input className="sign-up-input" type='text' placeholder='Input your photo'/>
                    <input className="sign-up-input" type='text' placeholder='Input your status'/>

                    <div className='inputL'>
                        <button className='button-logggg' type='submit'>Sign up</button>
                        <button className='button-logggg' type='submit' onClick={props.changeRegisStatus}>Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp

//https://drive.google.com/u/0/uc?id=1IXeEdFPblSGMZ_cpUuHIGVrVWvA6l4CE&export=download
