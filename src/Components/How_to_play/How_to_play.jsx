import React from 'react';
import './How_to_play.css'

function How_to_play() {
  return (
    <div className='how_too_pplay'>
        <div class="how-to-area bg-color-2 area-padding">
            <div class="container">
                <div class="row">
					<div class="col-xl-12 col-lg-12 col-md-12">
						<div class="section-headline text-center">
                            <h2 className='Start_heading'>How to start</h2>
                            
						</div>
					</div>
				</div>
                <div class="row">
                    {/* <!-- single-well end--> */}
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <div class="single-how first-item">
                            <div class="how-img">
                                <span class="h-number">01</span>
                                <a class="big-icon" href="#"><img src="h1.png" alt=""/></a>
                            </div>
                            <div class="how-wel">
                                <div class="how-content">
                                     {/* <h4>Get access</h4>  */}
                                    <p>FIND A MEMBER FOR GROWING ULE COMMUNITY.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single-well end--> */}
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <div className="single-how responsive_mar ">
                            <div class="how-img">
                                <span class="h-number">02</span>
                                <a class="big-icon" href="#"><img src="h2.png" alt=""/></a>
                            </div>
                            <div class="how-wel">
                                <div class="how-content">
                                     {/* <h4>Investment</h4>  */}
                                    <p>YOUR MEMBER ACTIVATE A CONTRACT ON DEFI WITH ULE ECO-SYSTEM.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single-well end--> */}
                    <div class="col-xl-4 col-lg-4 col-md-4">
                        <div class="single-how thired-item">
                            <div class="how-img">
                               <span class="h-number">03</span>
                                <a class="big-icon" href="#"><img src="h3.png" alt=""/></a>
                            </div>
                            <div class="how-wel">
                                <div class="how-content">
                                     {/* <h4>Get Profit</h4>  */}
                                    <p>YOU RECEIVE A COMMISSION UNDER COMMUNITY GROWTH MEMBERSHIP.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="profit-calculater-area bg-color-2 fix area-padding">
            <div class="container">
                <div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="section-headline text-center">
                            <h2 className='Start_heading'>ULEfluencer</h2>
                            <p className='play_para'>Aspiring Influencers do not need to climb the ladder of fame alone!</p>
						</div>
					</div>
				</div>
                <div class="row align-items-center">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="about-profit-inner">
                            <div class="about-calculater">
                                <h3 className='text-white paly_sub_heading fs-1'>ULEfluencer</h3>
                                <p className='Para_Responsive'>

                    There are countless influencers that do not have the right tools and support to grow and showcase their talents at the starting stages of their journey. Many times, these dreamers are faced with insurmountable difficulties that compel them to give up on their dreams.
                    However, You Live Everyday, right? So, why should anyone have to give up on their dreams and goals? Life can always be fun, if you have the right people supporting you!</p>
                                <p className='Para_Responsive'>That is why, we, ULEians have taken a pledge to support aspiring influencers to support their growth journey. ULEians can donate to an influencer-support fund, called “The ULEfluencer Fund”. All the donations collected through this fund are dedicated to help growing influencers get the right tools, and support to showcase their talents and skills at full potential.</p>
                            </div>
                        </div>
                    </div>
					<div class="col-md-6 col-sm-6 col-xs-12">
						 <div class="contact-form">
                           <form id="contactForm" method="POST" action="#" class="contact-form">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" id="name" class="form-control" placeholder="Name" required data-error="Please enter your name"/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <input type="email" class="email form-control" id="email" placeholder="Email" required data-error="Please enter your email"/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <input type="text" id="msg_subject" class="form-control" placeholder="Subject" required data-error="Please enter your message subject"/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <textarea id="message" rows="7" placeholder="Massage" class="form-control" required data-error="Write your message"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                                        <button type="submit" id="submit" class="contact-btn">Submit</button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div> 
                                        <div class="clearfix"></div>
                                    </div>   
                                </div>   
                                
                            </form>  
                        </div>
					</div>
				</div>
            </div>
        </div>

        



        <div class="feature-area bg-color-2 fix area-padding">
            <div class="container">
                <div class="row align-items-center">
                   <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="feature-inner">
                            <div class="left-headline">
                                <h2 className='text-white fs-1 play_h2'>How to become a ULEian?</h2>
                                <p><b>Step 1 :</b> Create a TronPro Link Wallet<br/>
                                    <b>Step 2 :</b> Add Tron Network.<br/>
                                     <b>Step 3 :</b> Buy Tron from any exchange, such as Binance, Coinbase, CoinDCX, CoinSwitch, and transfer it to your TronLink wallet.<br/>
                                     <b>Step 4 :</b> Swap your digital coins with ULE on Sunswap. This will offer you ULEs based on the swapped digital currency.<br/>
                                     <b>Step 5 :</b> Swap using bridge.wyzthswap.org to convert Multi Chain ULE to WRC-20 based ULE<br/>
                                     <b>Step 6 :</b> Enjoy Hedging/Arbitrage rate over multi chain.

                                </p>
                            </div>
                             {/* <div class="down-btn">
                                <a href="#" class="app-btn left-btn">Play store</a>
                                <a href="#" class="app-btn right-btn">App store</a>
                            </div>  */}
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="feature-content">
                            <div class="feature-images">
                                <img src="f2.png" alt="" class="first-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default How_to_play