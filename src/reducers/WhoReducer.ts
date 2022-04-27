import { IMovie } from '../interface/movieDB';
export interface IRootState {
    whoReducer: IWhoState
}

export interface IWhoState {
    actor: string,
    movies?: IMovie[],
    blobURL?:string
}


const INITIAL_STATE:IWhoState = {
    actor: '',
    movies: [],
    blobURL: ''
}

export type whoActions = {type: 'setActor', payload:{ nameActor: string, blobURL: string, movies: IMovie[]}} | 
                         {type: 'setMovies', payload: []} | {type: 'restart'}

const WhoReducer = (state:IWhoState = INITIAL_STATE, action:whoActions ) => {
    switch (action.type) {
        case 'setActor' : 
            return {
                ...state,
                actor  :  action.payload.nameActor,
                blobURL:  action.payload.blobURL,
                movies :  action.payload.movies
                
            }
        
        case 'setMovies':
            return state
        
        case 'restart': 
        return {...INITIAL_STATE}

        default:
            return state;
    }

}

export default WhoReducer

