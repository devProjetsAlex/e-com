import React from 'react'
import { connect } from "react-redux";

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'


import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'

class SignIn extends React.Component {
    constructor(props){
    super(props)

    this.state ={
        email:'',
        password:''
    }
}


handleSubmit = async e => {
    e.preventDefault();
    const {emailSignInStart} = this.props
    const {email, password} = this.state

    emailSignInStart(email, password)
}

handleChange = e => {
    const {value, name} = e.target

    this.setState({[name]:value })
}

render() {
    const {googleSignInStart} = this.props
return (
 <SignInContainer>
     <SignInTitle> I already have an account</SignInTitle>
     <span> Sign in with your email and password</span>
                
     <form onSubmit={this.handleSubmit}>

                <FormInput 
                name="email" 
                type="email" 
                handleChange={this.handleChange} 
                value={this.state.email} 
                label="Email" required />
              

                <FormInput 
                name="password" 
                type="password" 
                value={this.state.password}
                handleChange={this.handleChange} 
                label="Password" 
                required />
               
       <ButtonsBarContainer>
                <CustomButton type="submit" > Sign In </CustomButton>
                <CustomButton 
                type='button'
                onClick={googleSignInStart} 
                isGoogleSignIn>  Google</CustomButton>
       </ButtonsBarContainer>
 
    </form>
 </SignInContainer>
   )

}
}

const mapDipatchToProps = dispatch => ({    
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart:(email, password) => dispatch (emailSignInStart({email,password}))
})

export default connect(
    null,
    mapDipatchToProps
  )(SignIn);