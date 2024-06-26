import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import HeroImage from '../assets/img/HeroImage.png';
import SumanthResume from '../assets/SumanthResume.pdf';
import { BsDownload } from 'react-icons/bs';
import heroimage2 from '../assets/img/heroimage2.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 1000;
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])
  const handleDownload = () => {
    setIsDownloading(true);

    // Simulating download completion after 2 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period / 2); // Decrease period for faster rotation
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <section className="banner" id="home">

      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi.. I'm Sumanth Reddy`} <span className="txt-rotate" dataPeriod="10000" data-rotate='[ "Web Developer", "Front-end Developer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I seek challenging opportunities where i can fully use my skills for the sucess of the organization. I am always in search of knowledge.
                    I've always been a great team player. I'm good at keeping a team together and producing a quality work in a team environment</p>
                  <a href={SumanthResume} download className="btn-download">
                   
                    Download Resume &nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <BsDownload size={20} style={{ marginRight: "5px" }} /> */}
                    <span className="download-icon">
                  <BsDownload size={20} />
                </span>
                  </a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <div className="image-circle">
                    <img src={heroimage2} alt="Header Img" />
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
