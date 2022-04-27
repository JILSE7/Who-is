import { useNavigate } from 'react-router-dom';
import nomadaLogo      from '../assets/nomada.jpeg';

import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;


interface IProps {
    children?: JSX.Element | JSX.Element[]
}


const LayOut = ({children}:IProps) => {
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
                <p>Escoganme :c</p>
                <p>Nocierto pero si quieren sicierto :D</p>
            </Footer>
        </Layout>
    

  )
}

export default LayOut


