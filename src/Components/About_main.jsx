import React from 'react'
import { Link } from 'react-router-dom'
import About from './About/About'
import Footer from './Footer/Footer'
import Headers from './Header/Header'
import "./About_main.css"
import { IoIosArrowForward } from "react-icons/io"

function About_main() {
    return (
        <div>
            <div className=''>
                <Headers />
                <div class="page-area bread-pd">
                    <div class="breadcumb-overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="breadcrumb-title text-center">
                                    <h2>About Us</h2>
                                    <div class="bread-come">
                                        <nav aria-label="breadcrumb ">
                                            <ol class="breadcrumb purple lighten-4 justify-content-center">
                                                <li class="breadcrumb-items"><a class="black-text" href="#">Home</a><i class="ti-angle-right" aria-hidden="true"></i></li>
                                                <li class="breadcrumb-items"><a class="black-text" href="#">About us</a></li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <About />
                <Footer />
            </div>
        </div>
    )
}

export default About_main