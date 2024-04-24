import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{ height: '100px' }}> {/* Adjust the height as needed */}
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          
          <Col size={12} sm={6}>
          <div className="waviy">
              <span style={{ "--i": 1 }}>S</span>
              <span style={{ "--i": 2 }}>U</span>
              <span style={{ "--i": 3 }}>M</span>
              <span style={{ "--i": 4 }}>A</span>
              <span style={{ "--i": 5 }}>N</span>
              <span style={{ "--i": 6 }}>T</span>
              <span style={{ "--i": 7 }}>H</span>
              <span style={{ "--i": 10 }}> </span>
            </div>
          </Col>
          <br /><br /><br /><br />
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/sumanth-reddy-3713a2176" target="_blank" >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/sumanth_reddy_24?igsh=ZXgxNzJsbWl6aG8z&utm_source=qr" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://x.com/sumanth15045428?s=11" target="_blank"><img src={navIcon2} alt="Twitter" /></a>
            </div>
       
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
