import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./components/home";

function App() {
  
  return (
    
     
     
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
</BrowserRouter>


    
  );
}

export default App;
