import { Dispatch } from 'redux';
import { whoActions } from '../reducers/WhoReducer';
import { uploadFile } from '../api/nomada';



const setNameActor  = (nameActor: string) => (
    {
        type: 'setActor',
        payload: nameActor
    }
)


export const uploadImage = (file:File) => {
    return async(dispatch: Dispatch) => {
        
        const response = await uploadFile(file)
        console.log(response);
    }
}

export const startSetNameActor = (nameActor:string) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(setNameActor(nameActor))
        }, 3500);
    }
}