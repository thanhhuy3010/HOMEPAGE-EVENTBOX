import React from 'react';
import { Layout, Row, Col, Menu } from 'antd';
const { Header } = Layout;

const SubNavbar = () => (
  <Row>
    <Header
      style={{
        padding: '0 15px',
        height: '70px',
        background: '#4fc1e9',
        color: '#fafafa', display: 'flex', justifyContent: 'space-between',

      }}>
      <Col xl={12}>
        <div className="LoGo">
          <img src="./images/logo-vlu-8.png" width="140px" />
        </div>
      </Col>
      <Col xl={12}>
        <div className="navbar-collapse" >
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ 
              lineHeight: '70px',
              background:'#4fc1e9',
              fontWeight:'700',
              letterSpacing:'3px',
              fontSize: '18px',
              marginLeft:'50px',
              color:'white',
              borderBottom:'1px solid white'
          }}
          >
            <Menu.Item key="1">HOME</Menu.Item>
            <Menu.Item key="2">ABOUT</Menu.Item>
            <Menu.Item key="3">SPONSOR</Menu.Item>
            <Menu.Item key="4">SPEAKER</Menu.Item>
            <Menu.Item key="5">CONTACT</Menu.Item>
          </Menu>
        </div>
      </Col>



    </Header>


  </Row>
)
export default SubNavbar;