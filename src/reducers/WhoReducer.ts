export interface IRootState {
    whoReducer: IWhoState
}

export interface IWhoState {
    actor: string,
    movies?: [],
    blobURL?:string
}


const INITIAL_STATE:IWhoState = {
    actor: '',
    movies: [],
    blobURL: ''
}

export type whoActions = {type: 'setActor', payload:{nameActor:string, blobURL:string}} | {type: 'setMovies', payload: []} | {type: 'restart'}

const WhoReducer = (state:IWhoState = INITIAL_STATE, action:whoActions ) => {
    switch (action.type) {
        case 'setActor' : 
            return {
                ...state,
                actor: action.payload.nameActor,
                blobURL: action.payload.blobURL
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

