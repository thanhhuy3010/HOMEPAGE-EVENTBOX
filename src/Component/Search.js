import React from 'react';
import '../index.css';
import {
  Menu, Dropdown, Button, Icon, message, Input
} from 'antd';


const Search = Input.Search;

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="tag" theme="filled" />Concert</Menu.Item>
    <Menu.Item key="2"><Icon type="tag" theme="filled" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="tag" theme="filled" />3rd item</Menu.Item>
  </Menu>
);

const Searching = () => (
  
  <div className="searchbar">
    {/* header name */}
    <h1 className="title">LET <span style={{ marginLeft: '130px' }}></span> <span className="find" >FIND</span> YOUR EVENT</h1>
    {/* line */}
    {/* <div className="line"></div> */}
    <div className="searchInput">
      <Search
        placeholder=""
        onSearch={value => console.log(value)}
        enterButton
        size="large"
      />
      <Dropdown overlay={menu}>
        <Button type="warning" style={{ marginLeft: 10, borderRadius: 0, width: '120px', height: '40px' }}>
          All Category <Icon type="down-circle" theme="filled" />
        </Button>
      </Dropdown>
    </div>
    <div className="zone"></div>
  </div>
)
export default Searching;