import React from 'react'
import lib from '../images/lib.jpg';
import { NavLink } from 'react-router-dom';


import '../styleComponents/HomeStyle.css';

function Home() {
    return (
        <div className="wrapper">


            <div className="container">
                <div className="heading">

                    <h1>Get your resources here</h1>
                    {/* <div>
                    <img src="{lib}" alt="logo" />
                </div> */}
                </div>

                <div classname="links">
                    {/* <NavLink to="/" className="navigate">Home</NavLink> */}
                    <NavLink to="/about" className="navigate" > Resources Here</NavLink>
                </div>

            </div>







        </div >
    )
}

export default Home
