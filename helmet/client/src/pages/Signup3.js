import React from 'react';
import Navbar from '../components/Navbar';
import SignUpSection from '../components/SignUpSection';
import BikeInfo from '../components/BikeInfo';

function SignUp3() {
    return(
        <div>
        <Navbar />
        <SignUpSection>
            <BikeInfo />
        </SignUpSection>
        </div>
    )
};

export default SignUp3;