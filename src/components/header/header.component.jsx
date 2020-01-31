import React from 'react'


import {createStructuredSelector} from 'reselect'

import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'

import { HeaderContainer, LogoContainer, OptionContainer, OptionLink} from './header.styles'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selectors'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink  to='/contact'>
                CONTACT
            </OptionLink>
            { currentUser ? (
                    <OptionLink as='div' onClick= {()=> auth.signOut()}>
                            SIGN OUT
                    </OptionLink>
             ) : (
                    <OptionLink to='./signin'>
                            SIGN IN
                    </OptionLink>
              )}
            <CartIcon/>
        </OptionContainer>
        {hidden ? null: <CartDropdown/>}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
    })

export default connect(mapStateToProps)(Header) 