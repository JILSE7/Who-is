import { Layout, Menu, Breadcrumb } from 'antd';
import logo from '../assets/whoIs.png';
import nomadaLogo from '../assets/nomada.jpeg';

const { Header, Content, Footer } = Layout;


interface IProps {
    children?: JSX.Element | JSX.Element[]
}


const Taste = ({children}:IProps) => {

  return (
        <Layout className='Layout_container'>
            <Header className='header_container'>
                <div style={{display:"flex", alignItems:"center" }}>
                    <img className='nomada_logo' src={nomadaLogo} alt="whoImage" />
                    <Menu
                        theme="dark"
                        mode='horizontal'
                        defaultSelectedKeys={['2']}
                        items={[{key:1, label:"Home"},{key:2, label:"Trayectory"}]}
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

            <Footer>footer</Footer>
        </Layout>
    

  )
}

export default Taste




