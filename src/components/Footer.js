import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiEmail } from 'react-icons/tfi'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { FiInstagram } from 'react-icons/fi'

function footer() {
    return (
        <>
            <div className='footer-container fluid p-3 '>
                <div className='row'>

                    <div>
                        <h3 className='d-flex justify-content-center'>Join Us</h3>
                        <p className='d-flex justify-content-center'>We will let you know when we have new arrivals, events and promo's don't worry we send them infrequently, just a friendly hi now and again!</p>

                        {/* <hr class="hr hr-blurry" /> */}

                        <div class="container d-flex justify-content-center p-3">
                            <div class="col-md-6">
                                <div class="md-form">
                                    <TfiEmail />
                                    <input type="email" placeholder='Enter your email' id="form992" class="form-control validate"></input>
                                    <label for="form992" data-error="wrong" data-success="right"></label>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center p-5 '>
                            <a href='#' className='text-black text-decoration-none mx-3'>About</a>
                            <a href='#' className='text-black text-decoration-none mx-3'>Contact</a>
                            <a href='#' className='text-black text-decoration-none mx-3'>Returns</a>
                            <a href='#' className='text-black text-decoration-none mx-3'>Terms of Use</a>
                            <a href='#' className='text-black text-decoration-none mx-3'>Privacy Policy</a>
                        </div>

                        <div className='d-flex justify-content-center flex-row p-5 '>
                            <div className='rounded-circle'><TiSocialTwitterCircular size={35} /></div>
                            <div className='p-1 rounded-circle'><FiInstagram size={28} /></div>
                            <div className=' rounded-circle'><TiSocialFacebookCircular size={35} /></div>
                        </div>

                        <p className='d-flex justify-content-center'>Copyright 2022</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default footer