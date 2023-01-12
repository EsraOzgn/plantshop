import React from 'react'
import cardd from './images/cardd.jpg'
import mm from './images/mm.jpg'
import { Button } from 'react-bootstrap'

function Card() {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <div className='conteiner'>
                <div className='row d-flex justify-content-center'>

                    <div className='col-md-6 d-flex justify-content-center'>
                        {/* <p className='bg-warning d-flex justify-content-center'> */}
                        <img className="img-fluid rounded" src={cardd}></img>
                        {/* </p> */}
                    </div>

                    <div className='col-md-5'>
                        <p className='border border-black d-flex align-items-center p-5'>Decorate your home for Christmas
                            Pop Clancy the aglaonema on a shelf and his bright red leaves will draw your eye up and around the room. He'll fit right in with your holiday decorations. Nina the fittonia will add a touch of frosting to your mantlepiece, or choose Florence the white anthurium for a classic snowy look.
                            Shop the look below.  <Button className='btn btn-success'>lorem</Button>


                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>


                        </p>
                    </div>
                </div>
            </div>


            <br></br>
            <br></br>
            <br></br>



            <div className='conteiner'>
                <div className='row d-flex justify-content-center'>


                    <div className='col-md-5'>
                        <p className='d-flex align-items-center p-5 '>Decorate your home for Christmas
                            Pop Clancy the aglaonema on a shelf and his bright red leaves will draw your eye up and around the room. He'll fit right in with your holiday decorations. Nina the fittonia will add a touch of frosting to your mantlepiece, or choose Florence the white anthurium for a classic snowy look.
                            Shop the look below.
                            <br></br>
                            <button className='btn btn-success'>lorem</button>

                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>


                        </p>
                    </div>








                    <div className='col-md-6 d-flex justify-content-center'>
                        {/* <p className='bg-warning d-flex justify-content-center'> */}
                        <img className="img-fluid rounded" src={mm}></img>
                        {/* </p> */}
                    </div>



                </div>
            </div>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </>
    )
}

export default Card