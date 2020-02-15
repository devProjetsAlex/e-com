import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {GlobalStyle} from './global.styles'


/*  Pages  */
import ContactPage from './pages/contact/contact.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import CheckOutPage from './pages/checkout/chekout.component'


/* Component */
import Header from './components/header/header.component'

/* Redux */ 
import {selectCurrentUser} from './redux/user/user.selectors'
import {checkUserSession} from './redux/user/user.actions'

const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Switch>

        <Route path='/contact' component={ContactPage}/>

        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage} />
        <Route 
        exact 
        path='/signin' 
        render={() =>
        currentUser ? (
                  <Redirect to='/' />
               ) : (
                 <SignInAndSignUpPage />
               )
        }
        
        />
      </Switch>
    </div>
  );
 }


const mapStateToProps= createStructuredSelector ({
  currentUser: selectCurrentUser,
  
})

const mapDispatchToProps = dispatch => ({
  checkUserSession:() => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);