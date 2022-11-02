import React from 'react'
import {Link} from "react-router-dom"
import "./footer.css"
// global context
import {useGlobalContext} from "../context"
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// image
import footer from "../images/footer_logo.webp"



function Footer() {
  return (
    <section className='footer-area'>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-4">
          <div className="footer-logo mr-50">
            <Link to="/"><img src={footer} alt="logo"/></Link>
          </div>
          <p className='copy-rights'>This template is made by team-name | credits for <a href="https://colorlib.com" target="_blank">Colorlib</a> &copy; 2022</p>
        </div>
        <div className="col-12 col-lg-8">
          <div className="footer_menu">
            <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className="active"href="/">Home</Nav.Link>
                  <Nav.Link href="/Category">Shop</Nav.Link>
                  <Nav.Link href="/Product">Product</Nav.Link>
                  <Nav.Link href="/Cart">Cart</Nav.Link>
                  <Nav.Link href="/Checkout">Checkout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
    </section>

  )
}

export default Footer