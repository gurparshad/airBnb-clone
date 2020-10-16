import React from 'react'
import './SearchPage.css';
import { Button } from "@material-ui/core";

import SearchResult from './SearchResult';

import roomImage from './images/room1.jpg';

export default function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
            <p>62 stays . 26 Septaember to 20 september . 2 guest</p>
            <h1>Stays Nearby</h1>
            <Button variant="outlined">Cancellation Flexibility</Button>
            <Button variant="outlined">Type of Place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms and Beds</Button>
            <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResult img= {roomImage} 
                location="Private Room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 GUest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="$40 / night"
                total="$117 Total"
            />
            
            <SearchResult img= {roomImage} 
                location="Private Room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 GUest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="$40 / night"
                total="$117 Total"
            />

<SearchResult img= {roomImage} 
                location="Private Room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 GUest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="$40 / night"
                total="$117 Total"
            />

<SearchResult img= {roomImage} 
                location="Private Room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 GUest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="$40 / night"
                total="$117 Total"
            />

<SearchResult img= {roomImage} 
                location="Private Room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 GUest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="$40 / night"
                total="$117 Total"
            />

<SearchResult img= {roomImage} 
                location="Private Room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 GUest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="$40 / night"
                total="$117 Total"
            />

<SearchResult img= {roomImage} 
                location="Private Room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 GUest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="$40 / night"
                total="$117 Total"
            />

<SearchResult img= {roomImage} 
                location="Private Room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 GUest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="$40 / night"
                total="$117 Total"
            />
        </div>
    )
}