
 

import Create from './Create'
 

function Companies (){

    const data = [
       {
         name:"HCL",
         location:"Bangalore",
         skill1:"Java",
         skill2:"Python",

       },

       {
          name:"Cognizant",
          location:"Chennai",
          skill1:"Javascript",
          skill2:"C++",
       },
  
       {
          name:"TCS",
          location:"Hyderabad",
          skill1:"SQL",
          skill2:"C++",
        
      },
  
    {
        name:"Wipro",
        location:"Hyderabad",
        skill1:"MongoDB",
        skill2:"ReactJS",
    },
  
    {
        name:"Accenture",
        location:"Mumbai",
        skill1:"Java",
        skill2:"SQL",
        
    }
  

    ]

    return  <div className="samp">
    
           <Create CardData={data[0]}></Create>
           <hr className="sidebar-divider"/>

           <Create CardData={data[1]}></Create>
           <hr className="sidebar-divider"/>

           <Create CardData={data[2]}></Create>
           <hr className="sidebar-divider"/>

           <Create CardData={data[3]}></Create>
           <hr className="sidebar-divider"/>

           <Create CardData={data[4]}></Create>
           
            
           </div>
    



}

export default Companies