import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import CircularProgressBar from './CircularProgressBar';

export const Education = () => {
    const responsive = {
        superLargeDesktop: {
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
        <section className="education" id="education">
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col-12">
                        <div className="education-bx wow zoomIn">
                            <h2>Education</h2>
                            <br /><br />
                            <Carousel 
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                                customButtonGroup={<React.Fragment></React.Fragment>}
                                arrows={false} // Disable default arrows
                            >
                                 <div className="item">
                                    <CircularProgressBar  />
                                    <h5>University of East London <br/> Msc Computing </h5>
                                    <p>2024 - Present</p>
                                </div>
                                <div className="item">
                                    <CircularProgressBar percentage={60.7} />
                                    <h5>NIT ANDHRA PRADESH <br/>Btech  Chemical Engineering </h5>
                                    <p>2018 - 2022 </p>
                                </div>
                                <div className="item">
                                    <CircularProgressBar percentage={87.8} />
                                    <h5>NRI Junior College <br/> 12th - MPC </h5>
                                    <p>2016 - 2018</p>
                                </div>
                                <div className="item">
                                    <CircularProgressBar percentage={85} />
                                    <h5>Sri Sidhartha <br />High School <br/> SSC </h5>
                                    {/* <p className='item3'>SSC</p> */}
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
