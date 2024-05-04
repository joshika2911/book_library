import React from 'react';
import "./About.css";
import aboutImg from "../../components/images/about-img.jpg";

const About = ()=>{
    return(
        <section className='about'>
            <div className='container'>
                <div className='section-title'>
                    <h2>About</h2>
                </div>
                <div className='about-content grid'>
                    <div className='about-img'>
                        <img src = {aboutImg} alt = "" />
                    </div>
                    <div className='about-text'>
                        <h2 className='about-title fs-26 ls-1'>About My BookStore</h2>
                        <p className='fs-17'>This is about the BookStore which is used to find books of your 
                        own intrest.
                        In this you can get books of different genere.It is a Open Library for book lovers.
                        It's a open source to access books from anywhere.
                        You can access books from your place.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About