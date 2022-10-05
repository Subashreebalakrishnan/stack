
import { Link } from "react-router-dom"


function Sidebar (){



    return <div className="w3-sidebar w3-bar-block">
    
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

           
  <hr className="sidebar-divider"/>
    {/* <!-- Sidebar - Brand --> */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
       
    </a>
  
    {/* <!-- Divider --> */}
   
  
    {/* <!-- Nav Item - Dashboard --> */}
    <li className="nav-item active">
        <Link className="nav-link" to= "/home">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Home</span></Link>
    </li>
  
    {/* <!-- Divider --> */}
    
    <li className="nav-item active">
        <Link className="nav-link" to= "/Sign">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Sign in</span></Link>
    </li>
  
  
   
    
    {/* <!-- Heading --> */}
    
  
    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    
    
  </ul>
  </div>   
  }
    
    


  
  
  export default Sidebar


