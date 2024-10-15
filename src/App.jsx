import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'


function App() {


  return (
    <>
     <Header/>

     <Routes>

       <Route path='/' element={<Landing/>} />
       <Route path='/home' element={<Home/>} />
       <Route path='/watchHistory' element={<Watchhistory/>} />
     
     </Routes>

     <Footer/> 
    </>
  )
}

export default App
