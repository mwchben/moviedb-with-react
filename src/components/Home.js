import React from 'react';

//import configurations from src folder
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//import Components

//import Hooks
import { useState } from 'react';

//import Image
import NoImage from '../images/no_image.jpg';

const Home = () => {

        //*******state that will hold all the movies*******
     const [state ,setState] = useState();

     //we can also use alt 2

     //const state = useState();
     //[stateValue , theSetter] ...it isn't sestructured as the first alternative

     //so if we want to grab the state we use... 
     //state[0]

     //and if we want to set the state we would use
     //theSetter[]

     //*******state for the loading*******
     const [loading, setLoading] = useState(false);

     //*******state for if we receive an error from the API*******
     const [error, setError] = useState(false);

    return <div>Home Page</div>
}

export default Home;