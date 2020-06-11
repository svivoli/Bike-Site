import React from 'react';
import Navbar from '../components/Navbar';
import SignUpSection from '../components/SignUpSection';
import You from '../components/You';

function SignUp4() {
    return(
        <div>
        <Navbar />
        <SignUpSection>
            <You />
        </SignUpSection>
        </div>
    )
};

export default SignUp4;