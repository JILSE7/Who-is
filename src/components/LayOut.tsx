import { useNavigate }    from 'react-router-dom';
import nomadaLogo      from '../assets/nomada.jpeg';

import { Layout, Menu }   from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;




interface IProps {
    children?: JSX.Element | JSX.Element[]
}


export const LayOut = ({children}:IProps) => {
  const navigate = useNavigate();
  

  return (
        <Layout className='Layout_container'>
            <Header className='header_container'>
                <div style={{display:"flex", alignItems:"center" }}>
                    <img className='nomada_logo' src={nomadaLogo} alt="whoImage" />
                    <Menu
                        theme="dark"
                        mode='horizontal'
                        defaultSelectedKeys={['2']}
                        items={[{key:1, label:"Home", onClick: () => navigate("/")},{key:2, label:"Trayectory", onClick: () => navigate("/trayectory")}]}
                        forceSubMenuRender={true}
                        
                    />
                </div>
                <h2>Who is?</h2>
                <h3>Said Mandujano:<span>{` </jilse17>`}</span></h3>
            </Header>
                
                    <Content>
                        {
                            children
                        }
                    </Content>

            <Footer>
            <a href={"https://github.com/JILSE7/Who-is"} target="_blank" rel="noreferrer">
                 <GithubOutlined style={{color: "#00b1e3", fontSize: "28px", cursor:"pointer"}} />
            </a>
            </Footer>
        </Layout>
    

  )
}



