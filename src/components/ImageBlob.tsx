import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { removeActor } from "../actions/WhoActions";

interface IProps {
    actorName?: string
    blobURL?  :string,
}
export const ImageBlob = ({blobURL, actorName}:IProps) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clearStore = () => dispatch<any>(removeActor());

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
                    <h1 className="actorName">{actorName}</h1>
                    <img src={blobURL} alt="whoPicture" className='imageBlob'/>
                    <button onClick={() => navigate("/trayectory")}>Ver trayectoria</button>
                    <Button 
                       danger 
                       style={{borderRadius:"15px"}}
                       onClick={clearStore}
                    >
                        Empezar de nuevo
                    </Button>
                </>
            )
        }
      </>
  )
}

