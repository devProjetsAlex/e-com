import React, {useState} from 'react'
import { connect } from "react-redux";

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'


import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'

const SignIn =({emailSignInStart,googleSignInStart}) => {
    const [userCredentials, setCredentials ] = useState ({email:'', password:'' })
    const {email, password} = userCredentials



const handleSubmit = async e => {
    e.preventDefault();
   
    emailSignInStart(email, password)
}

const handleChange = e => {
    const {value, name} = e.target

    setCredentials({...userCredentials,[name]:value })
}

return (
 <SignInContainer>
     <SignInTitle> Membre </SignInTitle>
     <span> Entrer vos informations </span>
                
     <form onSubmit={handleSubmit}>

                <FormInput 
                name="email" 
                type="email" 
                handleChange={handleChange} 
                value={email} 
                label="Email" required />
              

                <FormInput 
                name="password" 
                type="password" 
                value={password}
                handleChange={handleChange} 
                label="Password" 
                required />
               
       <ButtonsBarContainer>
                <CustomButton type="submit" > Entrer </CustomButton>
                <CustomButton 
                type='button'
                onClick={googleSignInStart} 
                isGoogleSignIn>  Google</CustomButton>
       </ButtonsBarContainer>
 
    </form>
 </SignInContainer>
   )

}

const mapDipatchToProps = dispatch => ({    
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart:(email, password) => dispatch (emailSignInStart({email,password}))
})

export default connect(
    null,
    mapDipatchToProps
  )(SignIn);