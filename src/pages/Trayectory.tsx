import { useSelector } from 'react-redux';
import { ImageBlob } from '../components';
import { IRootState, IWhoState } from '../reducers/WhoReducer';
import Taste from './Taste';

const Trayectory = () => {

  const {actor, blobURL, movies} = useSelector<IRootState>((state) => state.whoReducer) as IWhoState;

  if(!actor) {
    return <p>Porfavor! sube una imagen primero para mostrar su trayectoria :C</p>
  }

  

  return (
    <div className='container'>
      <h1>{actor}</h1>
      <img src={blobURL} alt="whoPicture" className='imageBlob'/>
      {
        movies?.map(movie => {
          return <p>{movie.title}</p>
        })
      }
    </div>
  )
}

export default Trayectory