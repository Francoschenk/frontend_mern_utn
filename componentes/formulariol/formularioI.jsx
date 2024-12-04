import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Example from '../formulario/formulario';
import ListaLugares from '../busqueda/busqueda';

function FormularioI() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <aside>
      <ListaLugares class="ListaLugares" />
      </aside>
      <Example />    
      <Button type="submit">Mandar factura del pedido al email</Button>
      <h1></h1>
    </Form>    
  )
}

export default FormularioI;
