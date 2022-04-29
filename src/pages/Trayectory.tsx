import { useSelector } from 'react-redux';
import { ImageBlob } from '../components';
import { IRootState, IWhoState } from '../reducers/WhoReducer';


import { Tag, Divider, Card } from 'antd';
import { StarOutlined, ManOutlined, WomanOutlined,VideoCameraOutlined } from '@ant-design/icons';
import MovieCard from '../components/MovieCard';
import { useModal } from '../hooks/useModal';
import { ModalMovie } from '../components/ModalMovie';
import { useNavigate } from 'react-router-dom';



const Trayectory = () => {

  const {actor, blobURL, movies} = useSelector<IRootState>((state) => state.whoReducer) as IWhoState;

  const {handleOk, showModal, modal} = useModal();

  const navigate = useNavigate();
  
  if(!actor) {
    return <div className='container'>Porfavor! sube una imagen primero para mostrar su trayectoria :C</div>
  }

  const styles = {color:"yellow", fontSize: "36px"}

  return (
    <div className='container'>
      <main className='main_container'>
        <aside className='aside_actor'>
          <div>
            <img src={blobURL} alt="whoPicture" className='imageBlob'/>
            <h1>{actor.name}</h1>
            
            <Tag color={actor.gender == 1 ? "purple" : "blue"}>{actor.gender == 1 ? <WomanOutlined /> : <ManOutlined /> }</Tag>
            <h4>{actor.popularity}</h4>
            <div>
              <StarOutlined style={{...styles}}/>
              <StarOutlined style={{...styles}}/>
              <StarOutlined style={{...styles}}/>
              <StarOutlined style={{...styles}}/>
              <StarOutlined style={{...styles}}/>
            </div>
          </div>

  
          <button onClick={() => navigate("/")}>Return</button>
  
        </aside>
        <section className='section_movies'>
          <h3><VideoCameraOutlined /> Movies</h3>

          <div className='section_movies_card_container'>
            {
              movies?.map(movie => {
                return <MovieCard movie={movie} showModal={showModal}/>
              })
            }
          </div>
          
        </section>

      </main>

      <ModalMovie  
        handleOk={handleOk} 
        isModalVisible={modal.isVisible}
        modal={modal}
      />
    </div>
  )
}

export default Trayectory