import { Drag, ImageBlob } from './components';
import logo from './assets/whoIs.png';
import nomadaLogo from './assets/nomada.jpeg';
import { useSelector } from 'react-redux';
import { IRootState, IWhoState } from './reducers/WhoReducer';
import { useState } from 'react';
import WhoRouter from './router/WhoRouter';


function Who() {
  const whoState = useSelector<IRootState>((state) => state.whoReducer) as IWhoState;
  const [imageBlob, setimageBlob] = useState<string>('')

  


  return (
    <div className="App">
      <WhoRouter/>
    </div>
  );
}

export default Who;
