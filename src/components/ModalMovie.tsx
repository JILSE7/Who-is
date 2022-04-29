import { Modal } from 'antd';
import { IModalState } from '../hooks/useModal';

import { StarOutlined } from '@ant-design/icons';


interface IProps{
  modal: IModalState,
  isModalVisible: boolean,
  handleOk: () => void
}

export const ModalMovie = ({modal,isModalVisible, handleOk}:IProps) => {
  
    return (
        <Modal 
          cancelButtonProps={{ style: { display: 'none' } }}
          okButtonProps= {{style: {"backgroundColor": "#162235"}}}
          okText="Regresar" 
          onOk={handleOk} 
          title={modal.movie?.title} 
          visible={isModalVisible}  
        >
          
          <div className='modal_div'>
            <img src={`https://image.tmdb.org/t/p/w500${modal.movie?.poster_path}`} alt="" /> 
            <p>{modal.movie?.overview}</p>
            Estreno: 
            <span>{modal.movie?.release_date}</span>
              <StarOutlined style={{fontSize:"16px", color:"#162235"}}/>
            <span>
                {
                  modal.movie?.vote_average 
                }
            </span>
          </div>
        </Modal>
    );
}

