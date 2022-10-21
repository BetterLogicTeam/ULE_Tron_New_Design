import React from 'react'
import "./Contact_card.css"

function Contact_card() {
    return (
        <div className='contact_card_bg'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="contact_card">
                            <h3 className='Card_heading'>Community club</h3>
                            <p className='card_para'>When replacing a selection of text within a single line, the amount of words is roughly being maintained.multi-lined selection of text</p>
                            <button className='join_btn'>Join Us</button>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="contact_card">
                            <h3 className='Card_heading'>Community club</h3>
                            <p className='card_para'>When replacing a selection of text within a single line, the amount of words is roughly being maintained.multi-lined selection of text</p>
                            <button className='join_btn'>Join Us</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact_card