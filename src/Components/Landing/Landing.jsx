import React, { useEffect } from "react";
// import "./Landing.css";
import { useRef, useState } from "react";
// import { Autoplay, EffectCards } from "swiper";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import s1 from '../../assets/s1.png'
import CountUp from 'react-countup';
function Landing() {


    return (
        <>
            <div class="intro-area intro-home">
                <div class="bg-wrapper">
                    <img src="bg4.jpg" alt="" />
                </div>
                <div class="intro-content">
                    <div class="slider-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="slide-all-text">
                                        {/* <!-- layer 1 --> */}

                                        {/* <!-- layer 2 --> */}
                                        <div class="layer-2 wow fadeInUp" data-wow-delay="0.3s">
                                            <h1 className="title-2">ULE is a multi-chain decentralised MEME token
                                                that aims to fill your life with fun everyday!
                                            </h1>
                                        </div>
                                        <div class="layer- wow fadeInUp" data-wow-delay="0.3s">
                                            <h4 class="title-1">ULE Tokens are pegged to WYZ coins and are compatible with the dependable
                                                ecosystems of TRC 20, BNB, Polygon, Solana, and WRC 20 chains. Become
                                                a part of our community and enjoy UleTube, UleLive, Ulecks, Ulefy,
                                                and many other applications that can fill your everyday life with
                                                unlimited fun.</h4>
                                        </div>
                                        {/* <!-- layer 3 --> */}
                                        {/* <div class="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                                            <a href="services.html" class="ready-btn" >Get Started</a>
                                        </div> */}
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="slide-images-inner wow fadeInUp" data-wow-delay="0.5s">
                                        <div class="slide-images">
                                            <img src={s1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ===============//banner section end here \\================= -->
      <!-- ==========wallet Section start Here========== --> */}
            <div class="counter-area fix bg-color area-padding-3">
                <div class="container">
                    {/* <!-- Start counter Area --> */}
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-4">
                            <div class="single-fun">
                                <span class="counter-icon"><i class="flaticon-034-reward"></i></span>
                                <div class="counter-text">
                                    <h2><span class="count">
                                        <CountUp
                                            start={0}
                                            end={22609}
                                        // duration={2.75}

                                        />

                                    </span>+</h2>
                                    <h4>All Members</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4">
                            <div class="single-fun">
                                <span class="counter-icon"><i class="flaticon-016-graph"></i></span>
                                <div class="counter-text">
                                    <h2>$<span class="count"><CountUp
                                        start={0}
                                        end={500}
                                    // duration={2.75}

                                    /></span>k</h2>
                                    <h4>Total Deposit</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4">
                            <div class="single-fun">
                                <span class="counter-icon"><i class="flaticon-043-world"></i></span>
                                <div class="counter-text">
                                    <h2><span class="count"><CountUp
                                        start={0}
                                        end={80}
                                    // duration={2.75}

                                    /></span>+</h2>
                                    <h4>World Country</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <a href="#" class="scrollToTop">
                <i class="icofont-stylish-up"></i>
            </a>
        </>

    );
}

export default Landing;
