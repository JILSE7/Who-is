import { MovieResponse } from '../interface/movieDB';

const movieDBURL:string = "https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&page=1&include_adult=true";


export const getMoviesByActorName = async(actor:string):Promise<MovieResponse | undefined> => {
    try {
        const response:MovieResponse = await (await fetch(`${movieDBURL}&query=${actor}`)).json();

        return response;

    } catch (error) {
    
        console.log(error);
    }

}