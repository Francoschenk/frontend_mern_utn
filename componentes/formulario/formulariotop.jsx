import Form from 'react-bootstrap/Form';
import './formulariotop.css';

function FormGroupExample() {
  return (
    <Form className="forma">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Dirección de Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
}

export default FormGroupExample;