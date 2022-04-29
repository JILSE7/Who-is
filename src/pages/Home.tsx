import { Drag, ImageBlob } from '../components';
import { useSelector } from 'react-redux';
import { IRootState, IWhoState } from '../reducers/WhoReducer';


export const Home = () => {
 const {actor, blobURL} = useSelector<IRootState>((state) => state.whoReducer) as IWhoState;


 return (
      <div className="container">
        <ImageBlob blobURL={blobURL} actorName={actor?.name}/> 
        <Drag/>
      </div>
  )
}


