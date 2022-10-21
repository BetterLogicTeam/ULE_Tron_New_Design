import React from 'react'
import "./Contact_page.css"
import { Link } from "react-router-dom";
import{IoIosArrowForward} from "react-icons/io"

function Contact_page() {
  return (
   <div>
      <div class="page-area bread-pd">
                    <div class="breadcumb-overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="breadcrumb-title text-center">
                                    <h2>Contact Us</h2>
                                    <div class="bread-come">
                                        <nav aria-label="breadcrumb ">
                                            <ol class="breadcrumb purple lighten-4 justify-content-center">
                                                <li class="breadcrumb-items"><a class="black-text" href="#">Home</a><i class="ti-angle-right" aria-hidden="true"></i></li>
                                                <li class="breadcrumb-items"><a class="black-text" href="#"> Contact Us</a></li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

      
   </div>
  )
}

export default Contact_page