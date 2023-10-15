import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Pics() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src="manjifirstime.jpg" alt="manji" />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="odlschool.jpg" alt="school" />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="oldschool.jpg" alt="old" />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Pics
