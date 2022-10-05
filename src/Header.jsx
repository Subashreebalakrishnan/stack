
import { Link } from "react-router-dom"



function Header() {

    return <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
     <img src="https://th.bing.com/th/id/OIP.MHU3-9JIeORPnV7higlXKgAAAA?w=130&h=154&c=7&r=0&o=5&pid=1.7" ></img>
    <a className="navbar-brand" href="/">Stack overflow</a>
    <Link className="navbar-brand" to="/Questions">Questions</Link>
  
    <Link className="navbar-brand" to="/Companies">Companies</Link>
    <Link className="navbar-brand" to="/User">User profile</Link>
    
    <Link className="navbar-brand" to="/Tags">Tags</Link>
    
    
     <input type="text"></input> <button>Search by tag</button>
    
  </div>
</nav>
      
}

export default Header




