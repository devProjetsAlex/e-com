import React from 'react'
import {connect} from 'react-redux'

/* page */

import {CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item.styles'

/* Redux */

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem }) => {

    const{name, imageUrl, price, quantity} = cartItem

return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>

        <QuantityContainer>
            <div className='arrow' onClick= {()=>removeItem(cartItem)}>&#8668;</div>
               <span classNem='value'> {quantity}</span>
            <div className='arrow' onClick= {()=>addItem(cartItem)}>&#8669;</div>
        </QuantityContainer>

        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={()=> clearItem(cartItem)}>&#10060; </RemoveButtonContainer>
    </CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)