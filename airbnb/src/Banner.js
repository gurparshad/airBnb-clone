import React, { useState } from 'react'
import './Banner.css';

import Search from './Search';

import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

export default function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    const history = useHistory();

    return (
        <div className="banner">
        <div className="banner__search">
        <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton"
            variant="outlined">
                {showSearch ? "Hide" : "Search Dates"}
            </Button>
            {showSearch && <Search /> }
           
        </div> 
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <br></br>
                <h4>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h4>
                <br></br>
                <br></br>
                <Button variant="outlined" onClick={() => history.push('/search')}>
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}
