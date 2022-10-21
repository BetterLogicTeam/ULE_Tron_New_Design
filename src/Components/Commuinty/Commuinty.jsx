import React, { useEffect } from 'react'
import "./Commuinty.css"
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Community_Slider from './Community_Slider';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// import "./styles.css";


function Commuinty() {
    // let scrollinc
    // let sum = 0
    // const nextCard = () => {
    //     let card = document.querySelector('.card_slide')

    //     let scrollinc = 250;

    //     sum = Number(sum) + Number(scrollinc)

    //     if (scrollinc == 1000) {
    //         scrollinc = 0;
    //         card.scrollBy(scrollinc, 0)
    //     } else {
    //         card.scrollBy(scrollinc, 0)
    //     }

    //     console.log("Width", sum);
    // }
    // const prevCard = () => {
    //     let card = document.querySelector('.card_slide')
    //     let scrollinc = 250;
    //     card.scrollBy(-scrollinc, 0)

    // }

    // useEffect(() => {
    //     let card = document.querySelector('.card_slide')
    //     card.scroll(150, 0)


    // }, [])

    return (
        <div>
            <div class="reviews-area bg-color area-padding">
                <div className="container">
                    <div className="row">
                        <div className="  col-md-12 ">
                            <div class="testimonial-inner">
                                <div class="review-head">
                                    <h2 className='Community_heading text-white'>Community of the ULEians</h2>
                                    <p>The ULEians are always increasing in numbers! We are a fun-loving community that cares for our members.
                                        Professional crypto speakers from various genres are often invited to indulge with the ULEians and spread their light of knowledge. As ULEians, we are committed to popularising the WRC-20 blockchain and setting the criteria of world’s first wrapped chain adoption. The ULEians community can be found on various social media channels such as Instagram, Facebook, Telegram, etc.</p>

                                </div>
                                {/* <div className=' d-flex flex-row '>
                                    <div className='movebtn rounded-2'>
                                        <button className=' btn  text-white bg-dark ' onClick={() => { prevCard() }}>< IoIosArrowBack /></button>
                                    </div>
                                    <div className='movebtn rounded-2 ms-2'>
                                        <button className=' btn  text-white bg-dark ' onClick={() => { nextCard() }}>< IoIosArrowForward /></button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* <div className=" col-md-6 ">

                            <div className='d-flex card_slide'>
                                <Community_Slider Name={"Edward"} url={"1.jpg"} color={"#150550"} />
                                <Community_Slider Name={"Charlotte"} url={"2.jpg"} color={"#FC0077"}  />
                                <Community_Slider Name={"Daniel"} url={"3.jpg"} color={"#150550"}  />
                                <Community_Slider Name={"Graham"} url={"4.jpg"} color={"#FC0077"}  />


                            </div>

                           


                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commuinty