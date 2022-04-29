import { Dispatch } from 'redux';
import { InfoActor, whoActions } from '../reducers/WhoReducer';
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
const setActor  = (actor:InfoActor, movies: IMovie[],  blobURL:string,) => (
    {
        type: 'setActor',
        payload: { actor , blobURL, movies }
    }
)


export const getInfoActor = (file:File): (dispatch: Dispatch) => Promise<void> => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            //const {actorName}: IActorResponse = await uploadFile(file)

            
            const {results} = await getMoviesByActorName("Ben Affleck") as MovieResponse;
            const {gender, profile_path, name, popularity, known_for:actorMovies} = results[0];
            
            const actor:InfoActor = {name, gender, pathImage: profile_path, popularity }

        
            const blobURL = URL.createObjectURL(file);
            
            dispatch<any>(startSetActor(actor, actorMovies,  blobURL))
            
        } catch (error) {
            console.log(error);
        }
        
    }
}



/** Lanza el dispatch para establecer el actor a la store
 * @param actor 
 * @param movies 
 * @param blobURL 
 * @returns 
 */

export const startSetActor = (actor:InfoActor, movies: IMovie[],  blobURL:string, ) => {
    return (dispatch: Dispatch) => dispatch(setActor(actor, movies, blobURL) )
}