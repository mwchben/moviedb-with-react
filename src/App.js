//import default
import React from 'react';

//import components
import Header from './components/Header';
import Home from './components/Home';

//import styles
import { GlobalStyle } from './GlobalStyle';




//can be const App = () = {
//    return(
//        <div className="App"> <Header/> <BlobalStyle/> </div>  
//    )
//}
function App() { 
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle/>
    </div>
  ); 
}

export default App;
