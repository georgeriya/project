import React from 'react';

import './LoginContainer.css';
import LoginPage from '../LoginPage/LoginPage.react';

const LoginContainer = () => {

    return (
        <div className='logincontainer_wrapper'>
            <h1>Admin Login</h1>
           <LoginPage></LoginPage>
        </div>
    );

}

export default LoginContainer;