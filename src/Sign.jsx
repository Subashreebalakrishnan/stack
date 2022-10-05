


function Sign () {

    return <form className="bordered">  
        <div className="container">   
           <div> <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required   style={{"margin-left": "30px"}}/> </div> 
           
           
            <div><label>Password : </label>   

             <input type="password" placeholder="Enter Password"  name="password" required  style={{"margin-left": "32px"}}></input> </div>  
          
          
            <div>  <button type="submit"  style={{"margin-left": "140px"}}>Login</button>   </div><br></br>
           
            <div><input type="checkbox" checked="checked"/> Remember me   
              
            Forgot <a href="#"> password? </a>   
        </div>  
        </div> 
    </form>     
    

    
       
}

export default Sign
