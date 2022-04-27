import { Drag, ImageBlob } from '../components';
import logo from '../assets/whoIs.png';
import nomadaLogo from '../assets/nomada.jpeg';
import { useSelector } from 'react-redux';
import { IRootState, IWhoState } from '../reducers/WhoReducer';
import { useState } from 'react';
import { Footer } from 'antd/lib/layout/layout';
import Taste from './Taste';

const Home = () => {
 const whoState = useSelector<IRootState>((state) => state.whoReducer) as IWhoState;


 return (
      <div className="container">
        <ImageBlob blobURL={whoState.blobURL} actorName={whoState.actor}/> 
        <Drag/>
      </div>
  )
}

export default Home


