import { Drag, ImageBlob } from '../components';
import logo from '../assets/whoIs.png';
import nomadaLogo from '../assets/nomada.jpeg';
import { useSelector } from 'react-redux';
import { IRootState, IWhoState } from '../reducers/WhoReducer';
import { useState } from 'react';

const Home = () => {
 const whoState = useSelector<IRootState>((state) => state.whoReducer) as IWhoState;


  return (
    <>
     <header className='header_container'>
        <img src={nomadaLogo} alt="whoImage" />
        <h3>Said Mandujano:<span>{` </jilse17>`}</span></h3>
        <img src={logo} alt="whoImage" />
      </header>


      <div className="container">
        <ImageBlob blobURL={whoState.blobURL} actorName={whoState.actor}/> 
        <Drag/>
      </div>
    </>
  )
}

export default Home


