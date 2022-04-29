import { IActorResponse } from '../interface/nomada';
const nomadaURL:string  = "https://whois.nomada.cloud/upload";




export const uploadFile = async(file:File, method:string = 'POST'):Promise<any> =>{
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


