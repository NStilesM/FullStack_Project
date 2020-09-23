import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session_form/signup_form_container';
import LoginContainer from './session_form/login_form_container';
import NavContainer from './nav_bar/nav_bar_container';


const App = () => (
    <div>
        <header className="topnav">
            
            <a className="logo" src="/"><img src="https://pbs.twimg.com/profile_images/1219756472151601153/iKrwqrSJ_400x400.jpg" alt=""/></a>
            <h3 className="title">Class Everywhere</h3>
            <NavContainer /> 
            
            
        </header>
        {/* <h1 className="main-header">Class Everywhere</h1> */}

        <br/>  
        
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />
        
    </div>
)

export default App;