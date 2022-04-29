import { Drag, ImageBlob } from '../components';
import logo from '../assets/whoIs.png';
import nomadaLogo from '../assets/nomada.jpeg';
import { useSelector } from 'react-redux';
import { IRootState, IWhoState } from '../reducers/WhoReducer';
import { useState } from 'react';
import { Footer } from 'antd/lib/layout/layout';

const Home = () => {
 const {actor, blobURL} = useSelector<IRootState>((state) => state.whoReducer) as IWhoState;


 return (
      <div className="container">
        <ImageBlob blobURL={blobURL} actorName={actor?.name}/> 
        <Drag/>
      </div>
  )
}

export default Home


