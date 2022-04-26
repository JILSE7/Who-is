//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Trayectory from '../pages/Trayectory';
import Who from '../Who';

const WhoRouter = () => {
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL} >
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/trayectory' element={<Trayectory/>}/>
      
    </Routes>
</BrowserRouter>
  )
}

export default WhoRouter