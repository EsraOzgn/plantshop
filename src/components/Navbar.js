import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlBasket } from 'react-icons/sl'
import { IoMdHeartEmpty } from 'react-icons/io'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiSearchLine } from 'react-icons/ri'
import { BsArrowRightCircle } from 'react-icons/bs'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { SlClose } from 'react-icons/sl'


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import snake from './images/snake.png'
import { Button } from 'react-bootstrap';
// import React, { useState } from "react";
import cardd from './images/cardd.jpg'
import { TfiCheckBox } from 'react-icons/tfi';



function Navbar() {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    };


    return (
        <>
            <div className="nav-container fluid shadow p-3 mb-5 bg-white rounded">
                <div className=" row ">

                    <div className="brand d-flex justify-content-center text-decoration-underline bg-opacity-25 col-2">plant shop</div>

                    <div className="d-flex flex-row justify-content-evenly text-dark bg-opacity-25 col-5">
                        {/* <a href='#' className='text-black text-decoration-none' >Home</a> */}


                        <a href='#' className='text-black text-decoration-none'>

                            <DropdownButton className='w-100' variant="light" id="dropdown-basic-button" title=" Plants">
                                <Dropdown.Item className="mega-menu d-flex flex-row p-5 w-100">

                                    <h3 className='col-4'>All Plants</h3>

                                    <ul className='col-4'>
                                        <li>İndoor Plants<BsArrowRightCircle /> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                        </li>
                                        <li>Outdoor Plants <BsArrowRightCircle /> </li>
                                        <li>New In</li>
                                        <li>Plants Bundles</li>
                                    </ul>

                                    <div className="col-4 p-5 ">
                                        <div className="row">
                                            <img className="w-100 rounded-circle" src={snake} />

                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </DropdownButton>

                        </a>
                        <a href='#' className='text-black text-decoration-none'>

                            <DropdownButton className='w-100' variant="light" id="dropdown-basic-button" title=" Pots">
                                <Dropdown.Item className="mega-menu d-flex flex-row p-5 w-100">

                                    <h3 className='col-4'>All Plants</h3>

                                    <ul className='col-4'>
                                        <li>İndoor Plants<BsArrowRightCircle /> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                        </li>
                                        <li>Outdoor Plants <BsArrowRightCircle /> </li>
                                        <li>New In</li>
                                        <li>Plants Bundles</li>
                                    </ul>

                                    <div className="col-4 p-5 ">
                                        <div className="row">
                                            <img className="w-100 rounded-circle" src={snake} />

                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </DropdownButton>

                        </a>
                        <a href='#' className='text-black text-decoration-none'>

                            <DropdownButton className='w-100' variant="light" id="dropdown-basic-button" title=" PlantCare">
                                <Dropdown.Item className="mega-menu d-flex flex-row p-5 w-100">

                                    <h3 className='col-4'>All Plants</h3>

                                    <ul className='col-4'>
                                        <li>İndoor Plants<BsArrowRightCircle /> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                        </li>
                                        <li>Outdoor Plants <BsArrowRightCircle /> </li>
                                        <li>New In</li>
                                        <li>Plants Bundles</li>
                                    </ul>

                                    <div className="col-4 p-5 ">
                                        <div className="row">
                                            <img className="w-100 rounded-circle" src={snake} />

                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </DropdownButton>

                        </a>
                    </div>

                    <div className='d-flex justify-content-end text-dark bg-opacity-25 col-3'>
                        <a className="text-black " href="#"> <RiSearchLine size={20} /> </a>
                    </div>


                    <div className="d-flex flex-row justify-content-evenly text-dark bg-opacity-25  col-2">
                        <a className="text-black " href="#"> <SlBasket size={20} /> </a>

                        <a className="text-black " href="#"> <IoMdHeartEmpty size={20} /> </a>

                        {/* <a className="text-black " href="#"> <HiOutlineUserCircle size={25} /> </a> */}
                        <Button onClick={toggleModal} className="btn-modal bg-light text-decoration-none text-black"> Sign In </Button>
                    </div>


                    {/* Modal */}

                    {modal && (
                        <div className={modal ? "active-modal" : "modal"}>
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <div className="logo-component">
                                    <div className="logo border border-danger rounded bg-white" >


                                        <div className="logo-left rounded border border-primary">

                                            <div className="login-form">
                                                <form action="" className="form">

                                                    <div className="form-group">
                                                        <input id="first" className="form-input" type="text" placeholder="Your name?"></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <input id="last" className="form-input" type="text" placeholder="Your email"></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <input id="color" className="form-input" type="password" placeholder="Password"></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <input id="color" className="form-input" type="password" placeholder="Repeat your password"></input>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            I agree all statements in <a href="#"> Terms of service</a>

                                                        </label>
                                                    </div>

                                                    <Button className='btn btn-success'>Register</Button>

                                                </form>
                                            </div>


                                            {/* <div className="logo-left-header">

                                                <h1>Sign Up</h1>

                                            </div>
                                            <div className="input-side">
                                                <div className="email">


                                                </div>
                                                <div className="password">


                                                </div>
                                                <div className="logo-info">


                                                </div>
                                            </div>
                                            <div className="login-left-buttons">
                                                <div className="logo-left-login">


                                                </div>

                                                <div className="login-left-register ">

                                                </div>


                                            </div> */}

                                        </div>




                                        {/* <div className="logo-right rounded border border-danger">
                                            <div className="logo-right-logo">
                                                <img className="img-fluid rounded" src={cardd}></img>
                                            </div>
                                        </div> */}


                                    </div>

                                </div>
                                <button className="close-modal" onClick={toggleModal}><SlClose color='gray' /> </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </ >
    )
}

export default Navbar