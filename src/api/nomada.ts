const nomadaURL = "https://whois.nomada.cloud/upload";



export const uploadFile = async(file:File, method:string = 'POST') =>{

    const url = nomadaURL;
    const token = "NWJjMmQyY2MtNDliYy00MDhmLWJlOGEtNDk4ZTJjYjJiZWQ1";

    const formData = new FormData();
    formData.append('file', file);

    try {
        
        const response = await fetch(url, {
            method,
            headers: {
                'nomada': token,
            },
            body: formData
        })

        return response.json() || {};

    } catch (error) {
        console.log(error);
    }

    
};