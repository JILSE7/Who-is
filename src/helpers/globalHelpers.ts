import { toast } from "react-toastify";

export const headers = {
    nomada: "NWJjMmQyY2MtNDliYy00MDhmLWJlOGEtNDk4ZTJjYjJiZWQ1",
    'Content-Type': "multipart/form-data"
}

export const toastResponse = (id:string | number , error: string, actorName:string ) => {
    if(error){
        toast.update(id, { render: `Error: ${error}`, type: 'error', isLoading: false, autoClose:5000,hideProgressBar: false, closeOnClick: true });
        return;
    }

    toast.update(id, { render: `Good! is ${actorName}` , type: "success", isLoading: false ,autoClose:5000,hideProgressBar: false, closeOnClick: true });

}