import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import CircularProgressBar from './CircularProgressBar';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br /><br />
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item2">
                  <CircularProgressBar percentage={95} />
                  <h5>Web Development</h5>
                </div>
                <div className="item2">
                  <CircularProgressBar percentage={85} />
                  <h5>React JS</h5>
                </div>
                <div className="item2">
                  <CircularProgressBar percentage={95} />
                  <h5>HTML</h5>
                </div>
                <div className="item2">
                  <CircularProgressBar percentage={95} />
                  <h5>CSS</h5>
                </div>
                <div className="item2">
                  <CircularProgressBar percentage={50} />
                  <h5>Node JS</h5>
                </div>
                <div className="item2">
                  <CircularProgressBar percentage={45} />
                  <h5>Python</h5>
                </div>
                <div className="item2">
                  <CircularProgressBar percentage={40} />
                  <h5>Java Script</h5>
                </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
