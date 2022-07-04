//STEP 1 -- IMPORT REACT
import React from 'react'
import { Link } from 'react-router-dom';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Navbar() {
    let usertp = sessionStorage.getItem('Usertype')
    //let usertp = localStorage.getItem('Usertype')

    if (usertp === 'ADMIN') {
        return (
            <>
                <br />
                <nav>
                    <Link to="#">ADMIN HOME </Link> |
                    <Link to="#">SEARCH </Link>|
                    <Link to="#">VIEW ALL </Link> |
                    <Link to="#">DELETE </Link> |
                    <Link to="#">LOGOUT </Link>
                </nav>
            </>)
    }
    else {
        return (
            <>
                <br />
                <nav>
                    <Link to="/">HOME </Link> |
                    <Link to="/registration">REG </Link>|
                    <Link to="/login">LOGIN </Link> |
                    <Link to="/aboutus">ABOUT US </Link> |
                    <Link to="/contactus">CONTACT US </Link> |
                    <Link to="/adminlogin">ADMIN </Link>
                </nav>
            </>)
    }
}

//STEP 3 -- EXPORT IT TO USE IT
export default Navbar