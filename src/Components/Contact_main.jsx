import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer/Footer';
import { Header } from '../Routes';
import Contact_card from './Contact_card/Contact_card';
import Contact_form from './Contact_form/Contact_form';
import Contact_page from './Contact_page/Contact_page';


function Contact_main() {
    return (
        <div>
            <Header />


            <Contact_page />
            <Contact_form />
            <Contact_card />
            <Footer />
        </div>
    )
}

export default Contact_main