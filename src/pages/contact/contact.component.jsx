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
    <Email href={`mailto:${"dev.projets.alex@gmail.com"}`}>dev.projets.alex@gmail.com</Email>
    </ContactText>
</>
   
)

export default ContactPage