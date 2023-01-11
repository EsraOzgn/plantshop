import React from 'react'
import leaf from './images/leaf.webp'

function Header() {
    return (
        <>
            <div className="container-fluid shadow p-3 bg-white rounded">
                <div className="row">
                    <img className="w-50 shadow-lg p-3 mb-5 bg-white rounded" src={leaf} />

                </div>
            </div>


            <br></br>


            <div className="container-fluid shadow p-3 bg-white rounded">
                <div className="row">
                    <h1> Plants Make People Happy </h1>

                </div>
            </div>


        </>
    )
}

export default Header