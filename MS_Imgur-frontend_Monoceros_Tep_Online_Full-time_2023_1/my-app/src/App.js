import React from 'react';
import Home from './home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SigninPage from './sign-in';
import SignupPage from './sign-up';


function App() {
  return (
   <div className='App'>
    
     
  
      
    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signin' element={<SigninPage />}/>
      <Route path='/signup' element={<SignupPage />}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}


export default App;
