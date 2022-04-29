import { Dispatch } from 'redux';
import { getMoviesByActorName, uploadFile } from '../api';
import { IActorResponse } from '../interface/nomada';
import { InfoActor, whoActions } from '../reducers/WhoReducer';
import { IMovie, MovieResponse } from '../interface/movieDB';
import { toast } from 'react-toastify';
import { toastResponse } from '../helpers/globalHelpers';



/**
 * Action que establece el actor en la store
 * @param nameActor 
 * @param movies 
 * @param blobURL 
 * @returns 
 */
const setActor  = (actor:InfoActor, movies: IMovie[],  blobURL:string): whoActions => (
    {
        type: 'setActor',
        payload: { actor , blobURL, movies }
    }
)

/**
 * Action para restablecer la store
 * @returns void
 */
export const removeActor = () => {
    return (dispatch: Dispatch) => {
        dispatch<any>({type: 'restart'})
    }
};





/** Lanza el dispatch para establecer el actor a la store
 * @param actor 
 * @param movies 
 * @param blobURL 
 * @returns 
 */

export const startSetActor = (actor:InfoActor, movies: IMovie[],  blobURL:string, ) => {
    return (dispatch: Dispatch) => dispatch(setActor(actor, movies, blobURL) )
}


/**
 * Trae toda la logica para mostra la información del actor
 * @param file 
 * @returns 
 */
export const getInfoActor = (file:File): (dispatch: Dispatch) => Promise<void> => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {

            const id:string | number = toast.loading("Please wait...")

            const {actorName, error}:IActorResponse = await uploadFile(file);

            toastResponse(id, error, actorName);

            const {results} = await getMoviesByActorName(actorName) as MovieResponse;

            const {gender, profile_path, name, popularity, known_for:actorMovies} = results[0];
            
            const actor:InfoActor = {name, gender, pathImage: profile_path, popularity }
        
            const blobURL = URL.createObjectURL(file);
            
            dispatch<any>(startSetActor(actor, actorMovies,  blobURL))
            
        } catch (error) {
            console.log(error);
        }
        
    }
}
