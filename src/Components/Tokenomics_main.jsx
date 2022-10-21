import React from 'react';
import { Link } from "react-router-dom";
import { Header } from '../Routes';
import Footer from './Footer/Footer';
import Explore from './Tokenomics/Tokenomics';
import Tokenomics from './Tokenomics/Tokenomics';


function Tokenomics_main() {
  return (
    <div>
        <Header/>
        <section class="page-header-section style-1">
        <div class="container">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2 style={{color:'white'}}>Explore </h2>
                    </div>
                    <ol class="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li class="active">Explore</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <Explore />
    <Footer />
    </div>
  )
}

export default Tokenomics_main