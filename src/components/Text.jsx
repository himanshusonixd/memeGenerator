import { useState } from "react"
import Draggable from "react-draggable"
// import {ScaleText} from "react-scale-text";


let defaulttext= "click to edit"

export default function Text(){
   const[value ,setvalue]= useState(defaulttext)
   const[edit ,setEdit]= useState(false)

   
   const [showButton, setShowButton] = useState(true);

   const toggleButton = () => {
     setShowButton(!showButton);
   };
  


    return <div>
          
        

{/* {  
           edit ? <input onDoubleClick={ (e)=>setEdit(false)} value={value} onChange={e=> setvalue(e.target.value)}></input> : 

           <h1 onTouchStart={(e)=>setEdit(true)}>{value}</h1>
         } */}

<Draggable>
        <h1 onClick={toggleButton}>{value}</h1>
       
        </Draggable>
        <div id="addtext">
        {showButton && <input  className="inputfield" type="text" value={value} onChange={e=>setvalue(e.target.value)} onDrag={console.log("did a drag")} /> }
     
      
     {showButton && <button id="addtext" className="button-11"  onClick={toggleButton}>hide</button>}
    
      
        </div>
       
     
        
    </div>


}