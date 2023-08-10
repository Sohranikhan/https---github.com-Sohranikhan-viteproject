import "./App.css";
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel style={{ height: '90vh' }}>
      <Carousel.Item style={{ height: '90vh' }} className="item">
        <img
          className="d-block w-100 h-100"
          src="/src/assets/photo-1431794062232-2a99a5431c6c.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{background:'linear-gradient(rgba(0, 0, 0, 0.503),rgba(0, 0, 0, 0.503))', width:'100%',right: "0",left:"0"}}>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '90vh' }} className="item">
        <img
          className="d-block w-100 h-100"
          src="/src/assets/fir-trees-g443aafc2f_1280.jpg"
          alt="Second slide"
        />

        <Carousel.Caption style={{background:'linear-gradient(rgba(0, 0, 0, 0.503),rgba(0, 0, 0, 0.503))', width:'100%',right: "0",left:"0"}}>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '90vh'}}>
        <img
          className="d-block w-100 h-100"
          src="/src/assets/panama-ge84c956b4_1280.jpg"
          alt="Third slide"
        />

        <Carousel.Caption style={{background:'linear-gradient(rgba(0, 0, 0, 0.503),rgba(0, 0, 0, 0.503))', width:'100%',right: "0",left:"0"}}>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;