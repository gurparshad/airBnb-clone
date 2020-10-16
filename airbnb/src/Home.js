import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import roomImage1 from './images/room1.jpg';
import roomImage2 from './images/room2.jpg';
import roomImage3 from './images/room3.jpg';

export default function Home() {
    return (
        <div className="home">
           <Banner />

           <div className="home__section">
               <Card src ={image1} title="Unique Stays" 
                     description="Spaces that are more than just a place to sleep" />
               <Card src ={image2} title="Online Experiences" 
                     description="Unique activities we ca do together, led by a world of hosts."   />
               <Card src ={image3} title="Entire Homes" 
                   description="Comfortable private places, with room for friendsor family."/>
           </div>
           <div className="home__section">
               <Card src ={roomImage1} title="3 Bedroom Flat in Amazing Area" 
               description="Superhost with great amenities and amazing shopping complex nearby." price="$200/night"/>
               <Card src ={roomImage2} title="Penthouse in London" 
               description="Enjoy teh amazing sights of London with this stunning penthouse." price="$350/night"/>
               <Card src ={roomImage3} title="1 Bedroom apartment" 
               description="Superhost with great amenities and amazing shopping complex nearby." price="$120/night"/>
           </div>
        </div>
    )
}
