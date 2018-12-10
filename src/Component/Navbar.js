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
            background:'rgba(0, 0, 0, 0.8)', 
            display:'flex',alignItems:'center', 
            justifyContent: 'space-between'}}
    >
        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
            <a className="ant-dropdown-link" href="#" style={{ fontWeight: 'bold' }}>
                LANGUAGE <Icon type="down" />
            </a>
        </Dropdown>
        <div>
            <Button style={{ borderRadius: 0, marginRight: '5px' }} type="primary">Create Event</Button>
            <Button style={{ borderRadius: 0, marginRight: '5px' }} type="secondary">LOGIN</Button>
        </div>
    </Header>

)

export default Navbar;