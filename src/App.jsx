
import './App.css'

import Memepage from './components/Memepage'
import { Getmemes } from './Api/MemeApi'
import { Route, Routes } from 'react-router-dom'
import EditPage from './pages/EditPage'
function App() {
  

  return (
    <>
     
     <Routes>
      <Route path='/' element={<Memepage></Memepage>}></Route>
      <Route path='/edit'  element={<EditPage />}></Route>
     </Routes>

     
    </>
  )
}

export default App
