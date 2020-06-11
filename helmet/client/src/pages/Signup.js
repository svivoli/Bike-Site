import React from 'react';
import Navbar from '../components/Navbar';
import SignUpSection from '../components/SignUpSection';
import About from '../components/About';

function SignUp() {
    return(
        <div>
        <Navbar />
        <SignUpSection>
            <About />
        </SignUpSection>
        </div>
    )
};

export default SignUp;