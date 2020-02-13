import React, {useState} from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {signUpStart} from '../../redux/user/user.actions'

import { SignUpContainer, SignUpTitle } from './sign-up.styles'

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredientials] = useState({displayName: '',
    email:'',
    password:'',
    confirmPassword:''})
    
    const {displayName, email, password, confirmPassword} = userCredentials

 const handleSubmit = async e => {
    e.preventDefault()
    

      if (password !== confirmPassword) {
        alert("Password don't match")
        return;
    }
    signUpStart({displayName,email,password})
}

const handleChange = e => {
    const {name, value} = e.target

    setUserCredientials({...userCredentials,[name]:value})
}

        return (
            <SignUpContainer>
                <SignUpTitle>creer un compte</SignUpTitle>
                <span> S'enregistrer avec un email et un password </span>
                <form className='sign-up-form' onSubmit={handleSubmit}>

                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Votre nom'
                        required

                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required

                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required

                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirmer le Password'
                        required

                    />
                    <CustomButton type='submit'> CREER UN COMPTE</CustomButton>
                </form>
            </SignUpContainer>
        )
}
const mapDipatchToProps = dispatch => ({    
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})


export default connect(null, mapDipatchToProps)(SignUp)