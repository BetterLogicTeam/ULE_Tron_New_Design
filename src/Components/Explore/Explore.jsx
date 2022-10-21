import React from "react";
import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, EffectCards } from "swiper";

// import Card from "react-bootstrap/Card";
import "./Explore.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io"


function Explore() {
    return (
        <div className="bg_color" >
            <div class="page-area bread-pd">
                <div class="breadcumb-overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="breadcrumb-title text-center">
                                <h2>FAQ</h2>
                                <div class="bread-come">
                                    <nav aria-label="breadcrumb ">
                                        <ol class="breadcrumb purple lighten-4 justify-content-center">
                                            <li class="breadcrumb-items"><a class="black-text" href="#">Home</a><i class="ti-angle-right" aria-hidden="true"></i></li>
                                            <li class="breadcrumb-items"><a class="black-text" href="#">FAQ</a></li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-4">
                <div className="container">
                    <div class="section-headline text-center">
                        <h2>FAQ's</h2>

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="accordion " id="myAccordion">

                                <div class="accordion-item collapse_body ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button bg " data-bs-toggle="collapse" data-bs-target="#collapseone">1.
                                            Is ULE a token or a cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapseone" class="accordion-collapse collapse show  " data-bs-parent="#myAccordion">
                                        <div className="card-body  collapse_body">
                                            <p>ULE is a digital token that is based on the WYZ cryptocurrency. The major difference between a token and a crypto currency is that while tokens have a limited supply at any given time, crypto currencies can be minted and have an infinite supply depending on their core programming.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item collapse_body ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button bg " data-bs-toggle="collapse" data-bs-target="#collapseTwo">1.
                                            Is ULE a token or a cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                                        <div className="card-body  collapse_body">
                                            <p>ULE is a digital token that is based on the WYZ cryptocurrency. The major difference between a token and a crypto currency is that while tokens have a limited supply at any given time, crypto currencies can be minted and have an infinite supply depending on their core programming.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item collapse_body ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button bg " data-bs-toggle="collapse" data-bs-target="#collapseThree">1.
                                            Is ULE a token or a cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                                        <div className="card-body  collapse_body">
                                            <p>ULE is a digital token that is based on the WYZ cryptocurrency. The major difference between a token and a crypto currency is that while tokens have a limited supply at any given time, crypto currencies can be minted and have an infinite supply depending on their core programming.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item collapse_body ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button bg " data-bs-toggle="collapse" data-bs-target="#collapsefour">1.
                                            Is ULE a token or a cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapsefour" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                                        <div className="card-body  collapse_body">
                                            <p>ULE is a digital token that is based on the WYZ cryptocurrency. The major difference between a token and a crypto currency is that while tokens have a limited supply at any given time, crypto currencies can be minted and have an infinite supply depending on their core programming.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item collapse_body ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button bg " data-bs-toggle="collapse" data-bs-target="#collapsefive">1.
                                            Is ULE a token or a cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapsefive" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                                        <div className="card-body  collapse_body">
                                            <p>ULE is a digital token that is based on the WYZ cryptocurrency. The major difference between a token and a crypto currency is that while tokens have a limited supply at any given time, crypto currencies can be minted and have an infinite supply depending on their core programming.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="accordion " id="myAccordion">

                                <div class="accordion-item collapse_body ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button bg " data-bs-toggle="collapse" data-bs-target="#collapsesix">1.
                                            Is ULE a token or a cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapsesix" class="accordion-collapse collapse  " data-bs-parent="#myAccordion">
                                        <div className="card-body  collapse_body">
                                            <p>ULE is a digital token that is based on the WYZ cryptocurrency. The major difference between a token and a crypto currency is that while tokens have a limited supply at any given time, crypto currencies can be minted and have an infinite supply depending on their core programming.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item collapse_body ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button bg " data-bs-toggle="collapse" data-bs-target="#collapseeight">1.
                                            Is ULE a token or a cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapseeight" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                                        <div className="card-body  collapse_body">
                                            <p>ULE is a digital token that is based on the WYZ cryptocurrency. The major difference between a token and a crypto currency is that while tokens have a limited supply at any given time, crypto currencies can be minted and have an infinite supply depending on their core programming.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item collapse_body ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button bg " data-bs-toggle="collapse" data-bs-target="#collapsenine">1.
                                            Is ULE a token or a cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapsenine" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                                        <div className="card-body  collapse_body">
                                            <p>ULE is a digital token that is based on the WYZ cryptocurrency. The major difference between a token and a crypto currency is that while tokens have a limited supply at any given time, crypto currencies can be minted and have an infinite supply depending on their core programming.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item collapse_body ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button bg " data-bs-toggle="collapse" data-bs-target="#collapseTen">1.
                                            Is ULE a token or a cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapseTen" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                                        <div className="card-body  collapse_body">
                                            <p>ULE is a digital token that is based on the WYZ cryptocurrency. The major difference between a token and a crypto currency is that while tokens have a limited supply at any given time, crypto currencies can be minted and have an infinite supply depending on their core programming.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item collapse_body ">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button type="button" className="accordion-button bg " data-bs-toggle="collapse" data-bs-target="#collapseseven">1.
                                            Is ULE a token or a cryptocurrency?
                                        </button>
                                    </h2>
                                    <div id="collapseseven" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                                        <div className="card-body  collapse_body">
                                            <p>ULE is a digital token that is based on the WYZ cryptocurrency. The major difference between a token and a crypto currency is that while tokens have a limited supply at any given time, crypto currencies can be minted and have an infinite supply depending on their core programming.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>





        </div>
    );
}

export default Explore;
