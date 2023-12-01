import React from 'react';
import Grid from './component/explorer/explorer';
import PostSection from './component/post/post';
import './App.css';
import Navbar from './component/header/navbar';




function Home(props) {
    return (
        <div className="home" style={{ display: props.display }}>
            {/* header */}
             <Navbar />
            {/* Explore section */}
            <div className='explore'>
                <Grid />
            </div>

            <div className='bg-for-nav'></div>

           {/* tags for post */}
            <div id="tagContainer">
                <h3 class="tagLines-left">MOST VIRAL</h3>
                <h3 class="tagLines-right">NEWEST+</h3>
            </div>

            {/* Post section */}
            <div className='post-section'>
                <PostSection />
            </div>
        </div>
    )
}


export default Home;
