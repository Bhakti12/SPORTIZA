import React from 'react'
import ReactBootstrap, {Navbar,Container,Nav,Button,ListGroup,ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Tournamentt(){
    return(
        <>
<Navbar bg="dark" expand="lg">
  <Container>
    <Nav.Link href="/addtournament">Add Tournament</Nav.Link>
  </Container>
</Navbar>
  <ListGroup>
    <ListGroupItem className="d-flex">
    <strong>One</strong>
    <div className="ml-auto">
        <Link className="btn btn-warning mr-1" to="/edittournament">Edit</Link>
        <Button color="danger">Delete</Button>
    </div>
    </ListGroupItem>
  </ListGroup>

        </>
    );
}
export default Tournamentt;