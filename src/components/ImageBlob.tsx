import { useNavigate } from "react-router-dom"

interface IProps {
    actorName?: string
    blobURL?  :string,
}
export const ImageBlob = ({blobURL, actorName}:IProps) => {
    const navigate = useNavigate();
  return (
      <>
        {
            !blobURL ? (
                <>
                    <h1>No has sububido ninguna imagen :c</h1>
                    <div className="ImageBlobDiv"></div>
                </>
            ) : (
                <>
                    <h2 className="success_actorName">Oraleees...! es</h2>
                    <h1 className="actorName">{actorName}</h1>
                    <img src={blobURL} alt="whoPicture" className='imageBlob'/>
                    <button onClick={() => navigate("/trayectory")}>Ver trayectoria</button>
                </>
            )
        }
      </>
  )
}

