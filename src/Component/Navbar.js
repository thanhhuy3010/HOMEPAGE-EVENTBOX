import React from 'react';
import { Layout, Dropdown, Icon, Menu, Button } from 'antd';
const { Header } = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="#">Tiếng Việt</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="#">English</a>
        </Menu.Item>
    </Menu>
);
const Navbar = () => (
    <Header
        style={{ 
            height:'50px', 
            background:'#414345', 
            display:'flex',alignItems:'center', 
            justifyContent: 'space-between'}}
    >
        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
            <a className="ant-dropdown-link" href="#" style={{ fontWeight: 'bold' }}>
                LANGUAGE <Icon type="down" />
            </a>
        </Dropdown>
        <div>
            <Button  style={{borderRadius: 0,color:'white',border:'1px solid white',fontWeight:'700', marginRight: '5px', background: 'transparent' }}>Create Event</Button>
            <Button style={{ borderRadius: 0,border:'none', marginRight: '5px',fontWeight:'700' }} type="secondary">LOGIN</Button>
        </div>
    </Header>

)

export default Navbar;