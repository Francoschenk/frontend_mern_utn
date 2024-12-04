import Carousel from 'react-bootstrap/Carousel';
import './Hcaroussel.css';

function Hcarousel() {
  return (
    <Carousel data-bs-theme="dark" className='caroussel'>
      <Carousel.Item>
        <img 
          src="https://globalwfm.com/wp-content/uploads/2022/08/Should-You-Return-To-Office-Work-Pros-And-Cons.jpg"
          className="d-block w-100"
          alt="First slide"
        />
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/young-businessman-working-computer-office_93675-142648.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://freerangestock.com/sample/120407/man-working-at-a-laptop-and-phone-in-an-open-office.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hcarousel;