import React, { Component } from 'react'
import { Layout } from 'antd';
import CardItem from './CardItem';
import { Row } from 'antd';
import { Pagination } from 'antd';

const { Footer } = Layout;

export default class Content extends Component {
  render() {
    const elemCardItem = this.props.data.map((event, index) => {
      return <CardItem
        key={index}
        event={event}
      />
    })
    return (
      <div>
        <div className="CardList">
          <h1 style={{ textAlign: 'center', marginTop: "30px", marginBottom: '30px' }}>NEWS EVENT</h1>
        </div>
        <div>
          <Row type="flex" justify="space-around" gutter={40}>
            {elemCardItem}
          </Row>
        </div>
        <Pagination  style={{ textAlign: 'center' }} defaultCurrent={1}  total={50} />




        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </div>
    )
  }
}
