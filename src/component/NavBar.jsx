import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export const NavBar = ({search}) => {
 const onsearch=(word)=>{
  search(word)
 }
  return (
    <Row>
      <Col sm='12'>

    <Navbar className='nav-style'  expand="lg" variant='dark'>
      <Container >
        <a path="/"> 
        <Navbar.Brand className="NavBar_text"  style={{cursor:"pointer"}}>Movies Land</Navbar.Brand>
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
    
          </Nav>
          <Form className="d-flex ">
            <Form.Control 
              type="text"
              placeholder="ابحث هنا ...."
              style={{backgroundColor:"#8111be18" ,color:"white"}}
              className=" mx-2"
              aria-label="search"
              onChange={(e)=>onsearch(e.target.value)}
            />

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Col>
    </Row>
  );
}
