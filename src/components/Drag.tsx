import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {  getInfoActor } from '../actions/WhoActions';
const { Dragger } = Upload;



export const Drag = () => {

    const dispatch = useDispatch();


    const props = {name: 'file', multiple: false, action: "http://chanchitofeliz"};
    
    const beforeUpload = (file:File):boolean => {
        console.log(file);
        return false;
    }

    function onDrop(e:React.DragEvent<HTMLDivElement>):void {

        dispatch<any>(getInfoActor(e.dataTransfer.files[0]))
    }

  return (
      <div className='drag_container'>
        <Dragger {...props} 
                accept=".png,.jpeg,.jpg"
                listType="picture" 
                onDrop={onDrop} 
                beforeUpload={(file) => beforeUpload(file) }
                
            >

            <p className="ant-upload-drag-icon">
            <InboxOutlined />
            </p>
            <p className="ant-upload-text">Haz click o arrastra una imagen</p>
            <p className="ant-upload-hint">
                Solo se permite subir una imagen a la vez y de formato .png o .jpg
            </p>
            
        </Dragger>
      </div>
  )
}
