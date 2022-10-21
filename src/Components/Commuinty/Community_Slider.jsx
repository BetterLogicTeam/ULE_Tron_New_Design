import React from 'react'

export default function Community_Slider({Name,url,color}) {
    return (
        <div>

            <div className="owl-item active center slider_responsive " style={{width:'250px',marginLeft:'2rem'}} >
                <div class="single-testi">
                <div class="testi-text">
                    <div class="clients-text" style={{backgroundColor:(color)}}>
                        <div class="testi-img ">
                            <img src={url} alt="" />
                            <div class="guest-details text-white">
                                <h4>{Name}</h4>
                                <span class="guest-rev">Genarel customer</span>
                            </div>
                        </div>
                        <div class="client-rating">
                            <a href="#"><i class="ti-star"></i></a>
                            <a href="#"><i class="ti-star"></i></a>
                            <a href="#"><i class="ti-star"></i></a>
                            <a href="#"><i class="ti-star"></i></a>
                            <a href="#"><i class="ti-star"></i></a>
                        </div>
                        <p>When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines. When replacing a selection. help agencies.</p>
                    </div>
                </div>
            </div></div>
        </div>
    )
}
