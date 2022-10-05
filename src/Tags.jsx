import Tagcom from "./Tagcom"



function Tags() {

    const details=[
       
        {
           pgm: "Java",
           ques:"240",

        },

          
       
        {
            pgm : "C",
            ques:"400",
            
        },

       
        {
            pgm : "C++",
            ques:"450",
            
        },
        
              
        
        {
            pgm : "Javascript",
            ques:"450",
            
        },
       
       
        {
            pgm : "React",
            ques:"500",
            
        },
       
       
        {
            pgm : "MongoDB",
            ques:"700",
            
        },
       
       
        {
            pgm : "Node JS",
            ques:"700",
            
            
        },
       
       
        {
            pgm : "Python",
            ques:"375",
            
        },


        {
            pgm : "React Native",
            ques:"464",
            
        },


        {

            pgm : "Express",
            ques:"279",
        }

    ]

 return <>
        
      
      <Tagcom data={details[0]}></Tagcom>
      <br></br>
      <Tagcom data={details[1]}></Tagcom>
      <br></br>
      <Tagcom data={details[2]}></Tagcom>
      <br></br>
      <Tagcom data={details[3]}></Tagcom>
      <br></br>
      <Tagcom data={details[4]}> </Tagcom>
      <br></br>
      <Tagcom data={details[5]}></Tagcom>
      <br></br>
      <Tagcom data={details[6]}></Tagcom>
      <br></br>
      <Tagcom data={details[7]}></Tagcom>
      <br></br>
      <Tagcom data={details[8]}></Tagcom>
      <br></br>
      <Tagcom data={details[9]}></Tagcom>
 </>

}

export default Tags