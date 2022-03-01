import React from "react";
import "./home.css";
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import logo from "../assets/images/diane1.JPG";
const Home = () => {
  const { Header, Content, Footer, Sider } = Layout;
  return (





    <Layout>
      <Sider

      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{ marginTop: "-100%", height: "50%" }}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <a href="/about">About</a>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <a href="/contact">Contact</a>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />

        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <div className="logo">
            <img className="image" src={logo} style={{ height: "50vh", width: "45%" }} />
          </div>
          <div>
            <h1 style={{ color: "white", marginTop: "10%", marginLeft: "10%" }}>I'm Diane Dushimimana<br />
              Full stack developer<br />
              in  React J.s and Node J.s
            </h1>
            <a href="https://drive.google.com/file/d/1RW-K-JdOFnh8pBt4Z0HzNdGreVrA4gSi/view?usp=sharing" target="blank"><button style={{ height: "10%", width: "30%", marginTop: "20%", borderRadius:"10%" }}>See my C.V</button></a>
           <a href="https://github.com/dushimiman" target="blank"><button style={{marginLeft:"20%", height: "10%", width: "30%",borderRadius:"10%" }}> View projects</button></a> 
          </div>

        </div>

        <Footer style={{ textAlign: 'center', backgroundColor:"black" , color: "white" }}>@Diane Dushimimana</Footer>
      </Layout>
    </Layout>



  )
}
export default Home;