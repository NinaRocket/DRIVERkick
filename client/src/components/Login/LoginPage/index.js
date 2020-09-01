import React from 'react';
import LoginNavBar from '../LoginNavBar';
import LoginMainWrapper from '../LoginMainWrapper';
import LoginForm from '../LoginForm';

function LoginPage() {
    return (
        <div>
            <LoginNavBar />
            <LoginMainWrapper />
            <LoginForm />
        </div>
    );
}

export default LoginPage;