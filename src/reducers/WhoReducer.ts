interface IWhoState {
    actor: string,
    movies?: []
}


const INITIAL_STATE:IWhoState = {
    actor: '',
    movies: []
}

export type whoActions = {type: 'setActor', payload:string} | {type: 'setMovies', payload: []} | {type: 'restart'}

const WhoReducer = (state:IWhoState = INITIAL_STATE, action:whoActions ) => {
    switch (action.type) {
        case 'setActor' : 
            return {
                ...state,
                actor: action.payload

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

