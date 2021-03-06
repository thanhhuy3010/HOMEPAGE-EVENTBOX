import React from 'react';
import { Carousel } from 'antd';
import '../index.css';

const CaroselCop = () => (
  
    <Carousel className="carousel" effect="fade">
      <div>
        <div>
        <img src="./images/CRS-03.png"  />
        </div>
      </div>
      <div>
        <div>
          <img src="./images/CRS-01.jpg" />
        </div>
      </div>
      <div>
        <div>
          <img src="./images/CRS-02.png" />
        </div>
      </div>

    </Carousel>

  

)

export default CaroselCop;