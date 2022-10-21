import React from 'react'

function Contact_form() {
  return (
    <div className='contact_form_bg'>
        <div className="container">
        <div className="row py-4">
            <div className="col-lg-6">
                <img src="ab.jpg" alt="" className='w-100' />
            </div>
            <div className="col-lg-6">
          
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
                                        <button type="submit" id="submit" className="contact-btn  Submitt_btn">Submit</button>
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
  )
}

export default Contact_form