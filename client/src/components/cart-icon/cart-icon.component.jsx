import React from 'react' 
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import {selectCartItemsCount} from '../../redux/cart/cart.selector'

import {CartContainer, ShoppingIcon, ItemCountContainer} from './cart-icon.styles'


const CartIcon =({toggleCartHidden, itemCount}) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer>{itemCount}</ItemCountContainer> 
    </CartContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})



export default connect(mapStateToProps, mapDispatchToProps) (CartIcon)