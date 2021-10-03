import React from 'react'
import ReactBootstrap, {Form,Col,Button,Row} from 'react-bootstrap';

function Editt(){
    return(
        <form
          onSubmit={
            console.log("Hello")
          }
          method="get"
          action="/tournamentlist"
        >
  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Game Name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="GameName"/>
    </Col>
  </Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Game Type
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="GameType"/>
    </Col>
  </Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Player participate
    </Form.Label>
    <Col sm="10">
      <Form.Control type="number" placeholder="Player participate"/>
    </Col>
  </Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Total Player
    </Form.Label>
    <Col sm="10">
      <Form.Control type="number" placeholder="TotalPlayer"/>
    </Col>
  </Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Place
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Place"/>
    </Col>
  </Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Start Date
    </Form.Label>
    <Col sm="10">
      <Form.Control type="date" placeholder="StartDate"/>
    </Col>
  </Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      End Date
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="EndDate"/>
    </Col>
  </Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Entry Fees
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="EntryFees"/>
    </Col>
  </Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Win Price
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="WinPrice"/>
    </Col>
  </Form.Group>
<Button variant="primary" type="submit">
    Edit
  </Button>
</form>
    );
}
export default Editt;