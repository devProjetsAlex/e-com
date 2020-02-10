import React from 'react'
import './contact.styles'

import { TextDisclamer, ContactForm, ContactText, Email } from './contact.styles'

const ContactPage = () =>(
    <>
    <ContactForm> Dev.Projets.Alex</ContactForm>
    <TextDisclamer>
        Plusieurs intégrations sont disponibles, tel que le chat <br/> en direct, différentes devises de paiement, les <br/> systèmes de livraison par courrier, etc. 
    </TextDisclamer>
    <ContactText>
        Web developper for small business <br/>
        Developpeur de projet Web pour PME
            <br/>
     <Email> <a style={{color:"#DAA520"}} href={`mailto:${"dev.projets.alex@gmail.com"}`}>dev.projets.alex@gmail.com</a></Email>
     </ContactText>
    <p>Project dependencies : <br/> Redux v.4.0.1 <br/> Redux-Saga v.1.1.3 <br/> Redux-thunk v.2.3.0<br/>Redux-Persist v.5.10.0<br/>Redux-Logger v.3.0.6<br/>   Reselect v.4.0.0<br/> React-Router-Dom v.5.0.0 <br/> React-Stripe-Checkout v.2.6.3<br/> Node-Sass v.4.13.1 <br/> Firebase v.6.0.2 <br/> Styled-Component v4.2.0  </p>

     </>
)

export default ContactPage