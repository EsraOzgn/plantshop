import React from 'react'
import cardd from './images/cardd.jpg'
import mm from './images/mm.jpg'


function Card() {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 bg-primary p-3'>
                        <img className="w-75 rounded" src={cardd}></img>
                    </div>
                    <div className='col-6 bg-success p-3'> xxx</div>

                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>


            <div className='container'>
                <div className='row'>
                    <div className='col-6 bg-success p-3'> xxx</div>
                    <div className='col-6 bg-primary p-3'>
                        <img className="w-75 rounded" src={mm}></img>
                    </div>

                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default Card