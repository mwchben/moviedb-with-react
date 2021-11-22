import React from 'react';

//import API 
import API from '../API';

//import configurations from src folder
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//import Components
import HeroImage from './HeroImage';

//import Hooks
import { useState, useEffect } from 'react';
import { useHomeFetch } from '../hooks/useHomeFetch';

//import Image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const { state, loading, error } = useHomeFetch();
    
    console.log(state);
    return (
    
        <HeroImage/> 

    )
}

export default Home;