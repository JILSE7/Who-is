import { Dispatch } from 'redux';
import { whoActions } from '../reducers/WhoReducer';
import { uploadFile } from '../api/nomada';
import { IActorResponse } from '../interface/nomada';



const setActor  = (nameActor: string, blobURL:string) => (
    {
        type: 'setActor',
        payload: { nameActor , blobURL }
    }
)


export const uploadImage = (file:File) => {
    return async(dispatch: Dispatch) => {
        try {
            //const {actorName}: IActorResponse = await uploadFile(file)
            const blobURL = URL.createObjectURL(file);
            dispatch<any>(startGetActor("said", blobURL))
            
        } catch (error) {
            console.log(error);
        }
        
    }
}

export const startGetActor = (nameActor:string, blobURL:string) => {
    return (dispatch: Dispatch) => dispatch(setActor(nameActor, blobURL))
}