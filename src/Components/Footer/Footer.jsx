import React from 'react';
import './Footer.css'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TwitterOutlined,SendOutlined } from '@ant-design/icons';
import { ImReddit } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
        <footer class="footer1">
        <div class="footer-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-8">
                        <div class="footer-content logo-footer">
                            <div class="footer-head">
                                <h4>About ULETRON</h4>
                                <p>
                                   Help your introduced community members reach new level of crypto earnings experience with ULE
                                </p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-1 col-lg-1 col-md-4"></div>
                    <div class="col-xl-2 col-lg-2 col-md-4">
                        <div class="footer-content">
                            <div class="footer-head">
                                <h4>USEFUL LINKS</h4>
                                <ul className="footer-list  foter_ul">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="About.html">About Us</a></li>
                                     <li><a href="faq.html">FAQ</a></li>
                                    
                                    <li><a href="contact.html">Contact</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end single footer --> */}
                    <div class="col-xl-3 col-lg-3 col-md-4">
                        <div class="footer-content rs-mar-0">
                            <div class="footer-head">
                                <h4>USEFUL LINKS</h4>
                                <ul className="footer-list foter_ul">
                                   
                                    
                                    <li><a href="#">Login</a></li>
                                      <li><a href="#">Register</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms And Conditions</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                  
                    {/* <!-- end single footer --> */}
                    <div class="col-xl-3 col-lg-3 col-md-4">
                        <div class="footer-content last-content rs-mar-0">
                            <div class="footer-head">
                                <h4>Get In Touch</h4>
                                 <div class="footer-icons">
                                    <ul className='foter_ul'>
                                        <li>
                                            <a href="https://www.facebook.com/ULE-Community-113662044683677">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/UleCommunity">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/ule.community/">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/ulecommunity">
                                                <i class="fa fa-telegram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://discord.com/login?redirect_to=%2Fchannels%2F%40me">
                                                <i class="fa fa-youtube"></i>

                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Start Footer Bottom Area --> */}
        <div class="footer-area-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 text-center">
                        <div class="copyright">
                            <p>
                                Copyright © 2022
                                <a href="#">ULE TRON</a> All Rights Reserved
                            </p>
                        </div>
                    </div>
                     <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="footer-menu">
                            {/* <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul> */}
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        {/* <!-- End Footer Bottom Area --> */}
    </footer>
    </div>
  )
}

export default Footer