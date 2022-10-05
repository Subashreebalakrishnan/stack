import logo from './logo.svg';
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './Sidebar';
import Sign from './Sign';
import Home from './Home';
import Teams from './Teams';
import Companies from './Companies';
import Tags from './Tags';
import Questions from './Questions';
import User from './User';


function App() {
  return (  
    <BrowserRouter>
        <div id="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
           <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
              
                <Routes>
                <Route path="/Sign" element={<Sign/>}> </Route>
                <Route path="/home" element={<Home/>}> </Route>
                <Route path="/teams" element={<Teams/>}> </Route>
                <Route path="/Companies" element={<Companies/>}> </Route>
                <Route path="/Tags" element={<Tags/>}> </Route>
                <Route path="/Questions" element={<Questions/>}> </Route>
                <Route path="/User" element={<User/>}> </Route>
               
                 
                 
                 
            </Routes>
           </div>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
