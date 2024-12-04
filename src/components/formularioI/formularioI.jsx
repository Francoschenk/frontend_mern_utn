import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormularioI() {
  const [validated, setValidated] = useState(false);
  const [price, setPrice] = useState(0);
  const [mas2, setMas2]=useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if (validated==true){
      console.log(ll)
    }
  };
  const ll=0;
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">ll+2
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"

          feedback="You must agree before submitting."
          feedbackType="invalid"
          onClick="ffff"
        />
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          onClick="ffff"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
      <p>valor del viaje:${price}</p>
      <label>Price</label>
      <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)}></input>
      <p >value={price + (10 / 100) * price}</p>
      
      <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect">
            <option>con el viaje de avión</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Con el viaje de avión"
            className="mas2"
            onChange={(e) => setPrice(price+2)}
          />
          <Form.Check 
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Con el hotel incluido"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    
  )
}

export default FormularioI;
// https://stackoverflow.com/questions/65449121/how-can-we-add-two-different-value-in-react-jsx
// https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search
// https://rapidapi.com/wirefreethought/api/geodb-cities/playground/59908659e4b028109d40dd75
// https://github.com/yanelricarte/diplo_fullstack_2024/tree/main/proyecto_react/vite-project/src/componentes