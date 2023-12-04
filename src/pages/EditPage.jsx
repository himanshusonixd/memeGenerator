
import { useSearchParams } from "react-router-dom"
import '../App.css'
import { useState ,createRef } from "react"
import Text from "../components/Text"
import { exportComponentAsJPEG } from "react-component-export-image" 
export default function EditPage(){
    const[memetext, setMemetext]=useState(0)
    const [params]= useSearchParams()

    console.log(params.get('url'))
    console.log(params ,"parameters getting here")
    
    function addtext(){
        setMemetext(prev=> prev+1 )

    }
    const memeref=createRef();
    
    return <div>

    <div className="editmemecontainer">

        <h1>Sheesh nice meme bro ! </h1>
        
        <div  ref={memeref}  >

        <div   className="editpageimage">
        <img  src={params.get('url')} alt="" />
        </div>
        {Array(memetext).fill(0).map((e)=><Text></Text>)}

        <div className="editpgbtn">

        
        <button className="button-85" onClick={addtext}>Add text</button>
        <button className="button-85" onClick={e=>exportComponentAsJPEG(memeref)}>Save</button> 
        </div>
     
        </div>
      
      


    </div>
    <footer> <h3>Tips:</h3>
        <ol>
        <li>click on add text button to add your text</li>
    <li> if you want to add another text, click on add text  button again</li>
    <li> You can drag your text on the meme </li>
    <li> You can also drag the input field (it's not a bug, it's a feature) </li>
     </ol></footer>
    </div>



}