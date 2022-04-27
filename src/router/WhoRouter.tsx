//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Trayectory from '../pages/Trayectory';
import LayOut from '../components/LayOut';

const WhoRouter = () => {
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL} >
      <LayOut>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/trayectory' element={<Trayectory/>}/>
        </Routes>
    </LayOut>
</BrowserRouter>
  )
}

export default WhoRouter