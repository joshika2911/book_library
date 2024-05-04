import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = ()=>{
    return(
        <div className = 'holder'>
            <header className='header'>
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalize'>find your book of choice.</h2>
                    <p classname='header-text fs-18 fw-3'>The space to find your interest and wanted. The trash bin of your interest.
                    Place to find the books of all genere.
                    </p><br />
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Header