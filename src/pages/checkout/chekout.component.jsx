import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

/* Redux */

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'

/* page components */ 
import {CheckoutPageContainer, HeaderBlockContainer, CheckoutHeaderContainer, WarningContainer, TotalContainer} from './checkout.styles'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage =({cartItems, total}) => (
<CheckoutPageContainer>
    <CheckoutHeaderContainer>
            
            <HeaderBlockContainer>
                <span>
                            Product
                </span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
                <span>
                            Description
                </span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
                <span>
                            Quantity
                </span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
                <span>
                            Price
                </span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
                <span>
                            Remove
                </span>
            </HeaderBlockContainer>
          
    </CheckoutHeaderContainer>

                {
            cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )}   

    <TotalContainer>
            <span> TOTAL: ${total}</span>
            <WarningContainer>
            *NO BACK-END PAYMENT POSSIBLE **DEMONSTRATION ONLY <br/> USE CC: 4242 4242 4242 4242 - Exp:01/23 - CVV: 123 <br/> Thank you,Alex C. Merci!
            </WarningContainer>
    </TotalContainer>   

    <StripeCheckoutButton price={total} />

 </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)