import { useState } from 'react';
import { IMovie } from '../interface/movieDB';


export interface IModalState {
    isVisible: boolean,
    movie?: IMovie
}

export const useModal = () => {

    const [modal, setModal] = useState<IModalState>({isVisible:false, movie:undefined});

    const showModal = (movieModal?:IMovie):void =>{
        console.log(movieModal);
        setModal({isVisible:true, movie: movieModal});
    }
  
    const handleOk = ():void => setModal({isVisible:false, movie:undefined});

    return {
        handleOk,
        modal,
        showModal, 
    }

}

