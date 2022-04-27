import { MovieResponse } from '../interface/movieDB';
import { IActorResponse } from '../interface/nomada';
const nomadaURL:string  = "https://whois.nomada.cloud/upload";
const movieDBURL:string = "https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&page=1&include_adult=true";



export const uploadFile = async(file:File, method:string = 'POST'):Promise<IActorResponse | undefined> =>{
    try {
        const token = "NWJjMmQyY2MtNDliYy00MDhmLWJlOGEtNDk4ZTJjYjJiZWQ1";

        const formData = new FormData();
        formData.append('file', file);

        
        const response:IActorResponse = await (await fetch(nomadaURL, {
            method,
            headers: {
                'nomada': token,
            },
            body: formData
        })).json()

        return response;

    } catch (error) {
        console.log(error);
    }

    
};


export const getMoviesByActorName = async(actor:string):Promise<MovieResponse | undefined> => {
    try {
        const response:MovieResponse = await (await fetch(`${movieDBURL}&query=${actor}`)).json();

        return response;

    } catch (error) {
    
        console.log(error);
    }

}