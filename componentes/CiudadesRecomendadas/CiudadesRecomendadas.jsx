import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CiudadesRecomendadas.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Hcarousel from '../Hcaroussel/Hcaroussel';
import { useState } from 'react';

function RowColLayoutColWidthBreakpointExample() {
  return (
    <Container>
      <Row md={4}>
        <Col>
        1 of 3
        </Col>
        <Col xs={6}>
        2 of 3
        </Col>
        <Col>
        3 of 3
        </Col>
      </Row>
    </Container>
  );
}


function Cartas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setCount] = useState(0)
  
  const [disabled, setDisabled] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [desactivador, setDesactivador] = useState(false);
  const [activador, setActivador] = useState(true);
  const [ario, setArio] = useState(false);
  const [brio, setBrio] = useState(true);
  const [anewyork, setAnewyork] = useState(false);
  const [bnewyork, setBnewyork] = useState(true);
  const [abarcelona, setAbarcelona] = useState(false);
  const [bbarcelona, setBbarcelona] = useState(true);
  const [atokyo, setAtokyo] = useState(false);
  const [btokyo, setBtokyo] = useState(true);
  const [asydney, setAsydney] = useState(false);
  const [bsydney, setBsydney] = useState(true);

  function handleGameClick() {
    setDesactivador(!disabled);
    setActivador(!enabled);
  }
  function handleGameClic() {
    setDesactivador(!enabled);
    setActivador(!disabled);
  }



  const rio=1700;
  const paris=1850;
  const newyork=2500;

  const barcelona=2850;
  const tokyo=3400;
  const sydney=3000;

  const handleClick = (className) => {
      setDisabled(true);
      // enabled=true;
      setActivador(false);
      const rr=document.getElementsByClassName(className);
      () => setCount((count) => count+45)
      
  };
  const handleClic = (className) => {
      
    setEnabled(true);
    setDisabled(false);
    const rr=document.getElementsByClassName(className);
    () => setCount((count) => count+45)
  };
  
  // const desactiv = (className) => {
  //   () => setCount((count) => count+45)
  //   const rr=document.getElementsByClassName(className);
  //   rr.disabled;
  //   className.disabled;
  // };
  
  return (
    <>
   
    <div className='cartas'> 
    <Card  className='cartas1' style={{ width: '100%' }} >
      <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg" />
      <Card.Body>
        <Card.Title>Paris</Card.Title>
        <Card.Text>
          París, la ciudad del amor, destaca por su historia, 
          arquitectura impresionante y vibrante vida cultural.
        </Card.Text>
        <Form.Group className="m3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje</Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button className='separar' disabled={desactivador} onClick={
          handleGameClick 
        }>Terminé de escribir mi reseña</button>
        <button className="separar" onClick={handleGameClic} disabled={activador}>Modificar reseña</button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count+paris)
          setEnabled(false)
          setDisabled(true)
          }} disabled={disabled}>
        valor de viaje ${paris} 
        </Button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count-paris)
          setDisabled(false)
          setEnabled(true)
          }} disabled={enabled}>
          cancelar viaje
        </Button>
        <p>total de viajes ${count}</p>
      </Card.Body>
    </Card>
    <Card  className='cartas2' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://www.cronista.com/files/image/302/302492/5ffe1e5aec0ab.webp?oe=jpg" />
      <Card.Body>
        <Card.Title>Río de Janeiro</Card.Title>
        <Card.Text>
          Río de Janeiro, vibrante y festivo, 
          destaca por sus playas icónicas, el Cristo Redentor y el Carnaval.
        </Card.Text>
        <Form.Group className="m3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje</Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button className="separar" disabled={desactivador} onClick={
          handleGameClick 
        }>Terminé de escribir mi reseña</button>
        <button className="separar" onClick={handleGameClic} disabled={activador}>Modificar reseña</button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count+rio) 
          setArio(true)
          setBrio(false)
          }} disabled={ario}>
        valor de viaje ${rio} 
        </Button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count-rio)
          setArio(false) 
          setBrio(true)
          }} disabled={brio}>
          cancelar viaje
        </Button>
        <p>total de viajes ${count}</p>
      </Card.Body>
    </Card>
    <Card  className='cartas3' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg" />
      <Card.Body>
        <Card.Title>New York</Card.Title>
        <Card.Text>
          Nueva York, bulliciosa y diversa, 
          ofrece rascacielos icónicos, cultura vibrante y una energía única.
        </Card.Text>
        <Form.Group className="m3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje</Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button className="separar" disabled={desactivador} onClick={
          handleGameClick 
        }>Terminé de escribir mi reseña</button>
        <button className="separar" onClick={handleGameClic} disabled={activador}>Modificar reseña</button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count+newyork)
          setBnewyork(false)
          setAnewyork(true)
          }} disabled={anewyork}>
        valor de viaje ${newyork} 
        </Button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count-newyork)
          setAnewyork(false)
          setBnewyork(true)
          }} disabled={bnewyork}>
          cancelar viaje
        </Button>
        <p>total de viajes ${count}</p>
      </Card.Body>
    </Card>
    <Card  className='cartas4' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/020/484/medium/d0531471711b367b94abfd4dbc29e6ae/spain-barcelona-sagrada-familia-080416-az.jpg" />
      <Card.Body>
        <Card.Title>Barcelona</Card.Title>
        <Card.Text>
          Barcelona, vibrante y arquitectónicamente rica, combina playas, 
          el modernismo de Gaudí y una vida animada.
        </Card.Text>
        <Form.Group className="m3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje </Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button className="separar" disabled={desactivador} onClick={
          handleGameClick 
        }>Terminé de escribir mi reseña</button>
        <button className="separar" onClick={handleGameClic} disabled={activador}>Modificar reseña</button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count+barcelona)
          setBbarcelona(false)
          setAbarcelona(true)
          }} disabled={abarcelona}>
        valor de viaje ${barcelona} 
        </Button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count-barcelona)
          setAbarcelona(false)
          setBbarcelona(true)
          }} disabled={bbarcelona}>
          cancelar viaje
        </Button>
        <p>total de viajes ${count}</p>
      </Card.Body>
    </Card>
    <Card  className='cartas5' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW8lMjBjaXR5fGVufDB8fDB8fHww" />
      <Card.Body>
        <Card.Title>Tokyo</Card.Title>
        <Card.Text>
        Tokio, metrópoli futurista y tradicional, 
        fusiona tecnología avanzada con cultura rica, 
        comida exquisita y energía vibrante.
        </Card.Text>
        <Form.Group className="m3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje </Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button className="separar" disabled={desactivador} onClick={
          handleGameClick 
        }>Terminé de escribir mi reseña</button>
        <button className="separar" onClick={handleGameClic} disabled={activador}>Modificar reseña</button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count+tokyo)
          setBtokyo(false)
          setAtokyo(true)
          }} disabled={atokyo}>
        valor de viaje ${tokyo} 
        </Button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count-tokyo)
          setAtokyo(false)
          setBtokyo(true)
          }} disabled={btokyo}>
          cancelar viaje
        </Button>
        <p>total de viajes ${count}</p>
      </Card.Body>
    </Card>
    <Card  className='cartas6' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://viajes.nationalgeographic.com.es/medio/2017/02/13/shutterstock-209684521_fd608903.jpg" />
      <Card.Body>
        <Card.Title>Sydney</Card.Title>
        <Card.Text>
          Sídney, con su icónica Ópera y Harbour Bridge, 
          ofrece playas impresionantes y una vibrante vida urbana.
        </Card.Text>
        <Form.Group className="m3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje</Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button className="separar" disabled={desactivador} onClick={
          handleGameClick 
        }>Terminé de escribir mi reseña</button>
        <button className="separar" onClick={handleGameClic} disabled={activador}>Modificar reseña</button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count+sydney)
          setBsydney(false)
          setAsydney(true)
          }} disabled={asydney}>
        valor de viaje ${sydney} 
        </Button>
        <Button className="separar" variant="primary" onClick={() => { 
          setCount((count) => count-sydney)
          setAsydney(false)
          setBsydney(true)
          }} disabled={bsydney}>
          cancelar viaje
        </Button>
        <p>total de viajes ${count}</p>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Cartas;