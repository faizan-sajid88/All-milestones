import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';


import AddName from "./components/addName";
import Home from "./components/Home";
import { Navigate } from 'react-router-dom';

function App() {
  const HandleSubmit = ()=>{
    return (
      <Navigate to={"/home"} />
    )

  }
  return (;
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddName handleSubmit={HandleSubmit} />}/>
    <Route path="/home" element={<Home />}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
