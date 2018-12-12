import React from 'react';
import { Layout, Row, Col, Menu, Affix } from 'antd';
const { Header } = Layout;

const SubNavbar = () => (
  <Affix>
    <Row>
      <Header
        style={{
          padding: '0 15px',
          height: '70px',
          background: '#4e54c8',
          // background: 'linear-gradient(to right, #8f94fb, #4e54c8)', 
          // background: 'linear-gradient(to right, #8f94fb, #4e54c8)',
        
          color: '#fafafa', display: 'flex', justifyContent: 'space-between',
        }}>
        <Col xl={24} 
            style={{ display: 'flex', justifyContent: 'space-between',
          }}
        >
          <div className="LoGo">
            <img src="./images/logo-vlu-8.png" width="140px" />
          </div>
          
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['0']}
              style={{
                height:'70px',
                lineHeight: '70px',
                background: '#4e54c8',
                fontWeight: '700',
                letterSpacing: '3px',
                fontSize: '18px',
                marginLeft: '50px',
                color: 'white',
              }}
            >
              <Menu.Item key="1">HOME</Menu.Item>
              <Menu.Item key="2">ABOUT</Menu.Item>
              <Menu.Item key="3">SPONSOR</Menu.Item>
              <Menu.Item key="4">SPEAKER</Menu.Item>
              <Menu.Item key="5">CONTACT</Menu.Item>
            </Menu>
          
        </Col>




      </Header>


    </Row>


  </Affix>
)
export default SubNavbar;