import { Dispatch } from 'redux';
import { whoActions } from '../reducers/WhoReducer';
import { uploadFile, getMoviesByActorName } from '../api/nomada';
import { IActorResponse } from '../interface/nomada';
import { MovieResponse, IMovie } from '../interface/movieDB';



/**
 * Action que establece el actor en la store
 * @param nameActor 
 * @param movies 
 * @param blobURL 
 * @returns 
 */
const setActor  = (nameActor:string, movies: IMovie[],  blobURL:string,) => (
    {
        type: 'setActor',
        payload: { nameActor , blobURL, movies }
    }
)


export const getInfoActor = (file:File): (dispatch: Dispatch) => Promise<void> => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            //const {actorName}: IActorResponse = await uploadFile(file)

            const {results} = await getMoviesByActorName("Ben Affleck") as MovieResponse;

            const actorMovies = results[0].known_for;

            const blobURL = URL.createObjectURL(file);
            dispatch<any>(startSetActor("Ben Affleck", actorMovies,  blobURL))
            
        } catch (error) {
            console.log(error);
        }
        
    }
}



/** Lanza el dispatch para establecer el actor a la store
 * @param nameActor 
 * @param movies 
 * @param blobURL 
 * @returns 
 */

export const startSetActor = (nameActor:string, movies: IMovie[],  blobURL:string, ) => {
    return (dispatch: Dispatch) => dispatch(setActor(nameActor, movies, blobURL) )
}