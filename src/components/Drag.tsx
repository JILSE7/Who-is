import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {  uploadImage } from '../actions/WhoActions';
const { Dragger } = Upload;

interface IProps {
  actorName?: string
}

export const Drag = ({actorName}:IProps) => {

    const dispatch = useDispatch();


    const props = {name: 'file', multiple: false, action: "http://chanchitofeliz"};
    
    const beforeUpload = (file:File):boolean => {
        console.log(file);
        return false;
    }

    const onChange = (info:any) => {
        const { status } = info.file;
        console.log(status);
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }

        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
    }

    function onDrop(e:React.DragEvent<HTMLDivElement>) {
      //setimageBlob(URL.createObjectURL(e.dataTransfer.files[0]))
      //console.log(imageBlob);
        dispatch<any>(uploadImage(e.dataTransfer.files[0]))
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
