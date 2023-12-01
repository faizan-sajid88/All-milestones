import React from 'react';
import Logo from '../reuseable/logo.js';
import Button from '../reuseable/button.js';
import '../../App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass);

export default function Navbar(){

    return (

        <div className='header'>

        <div className='left-side'>

            <Logo />
            <Button name="New post" color="#1bb76e" />

        </div>

        <div className='search'>

            <input type='text' placeholder='Images, #tags, @users oh my!' />
            <FontAwesomeIcon className='search-icon' icon="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }} />

        </div>

        <div className='right-side'>

            <Button name="Go Ad-Free" color="#6432f9" />
            <Button name="Sign in" path="/signin" color="transparent" />
            <Button name="Sign up" color="#1bb76e" path="/signup" />

        </div>

    </div>




 )
}



  
