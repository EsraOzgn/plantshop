import React from 'react'
import leaf from './images/leaf.webp'
// import { Button } from 'react-bootstrap'


function Header() {
    return (
        <>
            <div className="container-fluid shadow p-3 rounded">
                <div className="row d-flex justify-content-end">
                    <h3 className='text col-6 d-flex align-items-center justify-content-center p-5'>Plants paradise with our planters!
                        {/* <Button className='btn btn-success'>lorem</Button> */}
                    </h3>
                    <img className="img-fluid w-50" src={leaf} />
                </div>
            </div>

            <br></br>

            <div className="container-fluid shadow p-3 bg-white rounded">
                <div className="row">
                    <h1 className='text'> Plants Make People Happy ... </h1>
                </div>
            </div>
        </>
    )
}
export default Header