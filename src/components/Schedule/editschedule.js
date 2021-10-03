import React from 'react'
import ReactBootstrap, {Form,Col,Button,Row} from 'react-bootstrap';

function Edits(){
    return(
        <Form>
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
      First Team
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="FirstTeam"/>
    </Col>
  </Form.Group>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Second Team
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="SecondTeam"/>
    </Col>
  </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Match Date
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="MatchDate"/>
    </Col>
  </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Match Time
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Match Time"/>
    </Col>
  </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
    <Form.Label column sm="2">
      Match place
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="Match Place"/>
    </Col>
  </Form.Group>
  <Button variant="primary" type="submit">
    Edit
  </Button>
</Form>
    );
}

export default Edits;