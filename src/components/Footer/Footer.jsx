import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'


const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
        <Container>
          <Row>
            <Col lg='4'>
            <div className="logo ">
              <div >
                <h1 className='text-white'>Manu</h1>
              </div>

            </div>
              <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corporis dolor ipsam nobis repellendus temporibus ut, molestias ipsa quae voluptatem!
              </p>
            </Col>
            <Col lg='3'>
              <div className="footer__quick-links">
                <h4 className="quick__links_title">
                  Top Categories
                </h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0 '>
                    <Link to='#' >Mobile Phones</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 '>
                    <Link to='#' >Modern Sofa</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 '>
                    <Link to='#' >Arm Chair</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 '>
                    <Link to='#' >Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg='2'>
            <div className="footer__quick-links">
                <h4 className="quick__links_title">
                  Useful Links
                </h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0 '>
                    <Link to='/shop' >Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 '>
                    <Link to='/cart' >Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 '>
                    <Link to='login' >Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 '>
                    <Link to='#' >Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg='3'>
            <div className="footer__quick-links">
                <h4 className="quick__links_title">
                  Contact
                </h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i className="ri-map-pin-line"></i></span>
                    <p>Vizag,India</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 '>
                  <span><i className="ri-phone-line"></i></span>
                    <p>+91 8179916428</p> 
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 '>
                  <span><i className="ri-mail-line"></i></span>
                    <p>leelamanohar.gudivada@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg='12'>
            <p className="footer__copyright">
              &copy; All Rights Reserved {year} | Developed by Manu
            </p></Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer