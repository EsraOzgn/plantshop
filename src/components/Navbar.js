import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap'
import { SlBasket } from 'react-icons/sl'
import { IoMdHeartEmpty } from 'react-icons/io'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiSearchLine } from 'react-icons/ri'
import { BsArrowRightCircle } from 'react-icons/bs'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import snake from './images/snake.png'



// import { useState, useRef } from 'react';
// import Button from 'react-bootstrap/Button';
// import Overlay from 'react-bootstrap/Overlay';
// import Popover from 'react-bootstrap/Popover';


function Navbar() {


    // const [show, setShow] = useState(false);
    // const [target, setTarget] = useState(null);
    // const ref = useRef(null);

    // const handleClick = (event) => {
    //     setShow(!show);
    //     setTarget(event.target);
    // };


    return (
        <>
            <div className="nav-container fluid shadow p-3 mb-5 bg-white rounded">
                <div className=" row ">

                    <div className="brand d-flex justify-content-center text-decoration-underline bg-opacity-25 col-2">plant shop</div>

                    <div className="d-flex flex-row justify-content-evenly text-dark bg-opacity-25 col-5">
                        {/* <a href='#' className='text-black text-decoration-none' >Home</a> */}


                        {/* <div ref={ref}>
                            <div className='btn' onClick={handleClick}>Plants</div>

                            <Overlay
                                show={show}
                                target={target}
                                placement="bottom"
                                container={ref}
                                containerPadding={20}
                            > */}
                        {/* <Popover id="popover-contained"> */}
                        {/* <Popover.Header as="h3">Popover bottom</Popover.Header> */}
                        {/* <Popover.Body>
                                        <ul>
                                            <li>İndoor Plants <BsArrowRightCircle /> </li>
                                            <li>Outdoor Plants <BsArrowRightCircle /> </li>
                                            <li>New In</li>
                                            <li>Plants Bundles</li>
                                        </ul>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div> */}

                        {/* 
                        <div ref={ref}>
                            <div className='btn' onClick={handleClick}>Pots</div>

                            <Overlay className="border border-primary"
                                show={show}
                                target={target}
                                placement="bottom"
                                container={ref}
                                containerPadding={20}
                            > */}
                        {/* <Popover className="border border-primary" id="popover-contained"> */}
                        {/* <Popover.Header as="h3">Popover bottom</Popover.Header> */}
                        {/* <Popover.Body>
                                        <ul>
                                            <li>İndoor Plants <BsArrowRightCircle /> </li>
                                            <li>Outdoor Plants <BsArrowRightCircle /> </li>
                                            <li>New In</li>
                                            <li>Plants Bundles</li>
                                        </ul>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>



                        <div ref={ref}>
                            <div className='btn' onClick={handleClick}>PlantCare</div>

                            <Overlay
                                show={show}
                                target={target}
                                placement="bottom"
                                container={ref}
                                containerPadding={20}
                            > */}
                        {/* <Popover id="popover-contained"> */}
                        {/* <Popover.Header as="h3">Popover bottom</Popover.Header> */}
                        {/* <Popover.Body>
                                        <ul>
                                            <li>İndoor Plants <BsArrowRightCircle /> </li>
                                            <li>Outdoor Plants <BsArrowRightCircle /> </li>
                                            <li>New In</li>
                                            <li>Plants Bundles</li>
                                        </ul>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div> */}






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



                        {/* <a href='#' className='text-black text-decoration-none '>
                            <DropdownButton className='w-full' variant="light" id="dropdown-basic-button" title="Pots">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>

                        </a>
                        <a href='#' className='text-black text-decoration-none'>
                            <DropdownButton variant="light" id="dropdown-basic-button" title=" PlantCare">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>


                        </a> */}
                    </div>


                    <div className='d-flex justify-content-end text-dark bg-opacity-25 col-3'>
                        <a className="text-black " href="#"> <RiSearchLine size={20} /> </a>
                    </div>


                    <div className="d-flex flex-row justify-content-evenly text-dark bg-opacity-25  col-2">
                        <a className="text-black " href="#"> <SlBasket size={20} /> </a>

                        <a className="text-black " href="#"> <IoMdHeartEmpty size={20} /> </a>

                        <a className="text-black " href="#"> <HiOutlineUserCircle size={25} /> </a>
                    </div>

                </div>
            </div>
        </ >
    )
}

export default Navbar