import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormGroupExample from './formulariotop'; 
import './formulario.css'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setCount] = useState(0)
  
  const [disabled, setDisabled] = useState(false);
  const [enabled, setEnabled] = useState(true);
  var ll=45;
  
  const handleClick = (className) => {
      
      
      setDisabled(true);
      setEnabled(false);
      const rr=document.getElementsByClassName(className);
      () => setCount((count) => count+45)
      
  };
  const handleClic = (className) => {
      
    setEnabled(true);
    setDisabled(false);
    const rr=document.getElementsByClassName(className);
    () => setCount((count) => count+45)
  };
  const precioconavion=400;
  return (
    <>
      <Button className="derecha" variant="primary" onClick={handleShow}>
        Conocer el precio del dolar de hoy
      </Button>
      <button disabled={enabled} onClick={() => {
      setCount((count) => count-precioconavion);
      handleClic();
      }} className='boleto' > Cancelar boleto de avión en el paquete </button>
      <FormGroupExample />
      <p>para enviar precio acordado + extras</p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>VOYAGEVISTA</Modal.Title>
          
        </Modal.Header>
        <img
              src="https://i.imgur.com/nDEU5bv.jpeg"
              width="120"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Modal.Body>
        <Button className="separar" variant="primary" as="a" href={`https://dolarhoy.com/`} >Buscar cotizaciòn del dolar hoy</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
        
      </Modal>
      {/*  */}
      
      <button className="Botonsuma" disabled={disabled} onClick={(Botonsuma) => {
      setCount((count) => count+precioconavion);
      handleClick();
      }} > sumar al viaje boleto de avión ($400)</button>
      
      <p>PRECIO FINAL:${count}</p>
      
      
    </>
  );
}

export default Example;

