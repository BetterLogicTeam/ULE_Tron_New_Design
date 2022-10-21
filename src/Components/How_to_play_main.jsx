import React from 'react'
import How_to_play from './How_to_play/How_to_play';
import { Link } from "react-router-dom";
import { Header } from '../Routes';
import Footer from './Footer/Footer';
import Contact_page from './Contact_page/Contact_page';
import Contact_form from './Contact_form/Contact_form';
import Contact_card from './Contact_card/Contact_card';


function How_to_play_main() {
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

export default How_to_play_main