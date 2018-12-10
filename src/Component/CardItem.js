import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
//cách 1 import TripModal from './TripModal';
import  '../index.css';
const { Meta } = Card;

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
  }
  toggleInfo = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  //handle edit 
  // handleEdit = () =>{
  //     this.props.transferData(this.props.trip)
  //     this.props.convertAddToEdit();
  // }

  render() {
    const { event } = this.props;
    console.log("render")
    return (
        
          <Col span={6} >
            <Card
            hoverable
            className="myCard"
            style={{ width: '300px',marginBottom:'30px' ,marginLeft:'40px' }}
            bordered={false}
            cover={<img alt="example" src= {event.cover} />}
          >
            <Meta
              title={event.name}
              description={event.time}
            />
          </Card>
          </Col>
      

        

    );
  }
}

export default CardItem;