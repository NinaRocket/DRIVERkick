import React from 'react';
import './style.css';
import SignUpNavBar from '../SignUpNavBar';
import SignUpMainWrapper from '../SignUpMainWrapper';
import SignUpForm from '../SignUpForm';

function SignUpPage() {
    return (
        <div>
            <SignUpNavBar />
            <SignUpMainWrapper>
                <SignUpForm />
            </SignUpMainWrapper>
        </div>
    );
}

export default SignUpPage;