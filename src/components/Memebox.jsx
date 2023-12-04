import '../App.css'
import { useNavigate } from 'react-router-dom'
export default function Memebox({ img, title }) {

    const navigate =useNavigate();
    return <div className='memeboxcontainer'>

        <div className="memebox">

            <div>
                <img src={img} alt="" />
            </div>
        </div>
        <div className='memebox-btns'>
            <h2>{title}</h2>
            <button onClick={e=> navigate(`/edit?url=${img}`)} className='button-85'>Edit meme
            </button>
        </div>


    </div>

}