import Memebox from "./Memebox"
import '../App.css'
import { Getmemes } from "../Api/MemeApi"
import { useEffect, useState } from "react"

export default function Memepage(){
    const[memesData ,setMemesData]= useState([])

    useEffect(()=>{
        Getmemes().then((memes) =>setMemesData(memes.data.memes))


    },[])

    console.log(memesData)
    return <div style={{textAlign:"center", fontSize:"large"}}>    

        <h1>Meme generator <span>&#128640;</span></h1>
        <div className="memecontainer">

      
        {memesData.map(el =><Memebox img={el.url} title={el.name}></Memebox>)}

        </div>


    </div>


}