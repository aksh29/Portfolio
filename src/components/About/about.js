import React from 'react';
import Main from '.././Main/main';
import './about.css';
import intro from'../.././Images/About.PNG';
import skill from'../.././Images/programmer1.PNG';
import {Link} from 'react-router-dom';

export default class About extends React.Component {
   
    render() {
        return(
        <Main>
            <section class="about-area py-5 px-3">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 pt-5">
                            <div class="about-image mx-auto">
                                <img src={intro} alt="About us" class="img-fluid"/>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-10 mx-auto about-title">
                            <h2 class="text-uppercase pt-4">
                                <span>Let me</span>
                                <span>introduce</span>
                                <span>myself</span>
                            </h2>
                            <div class="paragraph py-4 w-75">
                                <p className="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure obcaecati vel
                                    possimus officia maiores perferendis ut! Quos, perspiciatis.
                                </p>
                                <p className="para">
                                    It is a long established fact that a reader will be distracted by the readable content
                                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                    here
                                </p>
                            </div>
                            <Link to='CV.docx' target='_blank' download><button type="button" className="btn button primary-button text-uppercase">Download cv</button></Link>
                        </div>
                    </div>

                    <div className='row pt-5'>
                        <div className="col-lg-6 col-md-12 skill-title">
                            <h2 className="text-uppercase mx-auto">
                               <center> SKILLS </center>
                            </h2>
                            <h3 className="text-uppercase mx-auto"><center>Front-End</center></h3>
                            <div class="paragraph py-4">
                                <center>
                                <img className='tech-img col-md-4 col-sm-6 pb-2' src={'React_Icon.png'}/>
                                <img className='tech-img col-md-4 col-sm-6 pb-2' src={'HTML5_Icon.png'}/>
                                <img className='tech-img col-md-4 col-sm-6 pb-2' src={'css3_Icon.png'}/>
                                <img className='tech-img col-md-4 col-sm-6 pb-2' src={'JavaScript_Icon.png'}/>
                                </center>
                            </div>

                            <h3 className="text-uppercase mx-auto"><center>Backend-End</center></h3>
                            <div class="paragraph py-4">
                            <center>
                                <img className='tech-img col-md-4 col-sm-6 pb-2' src={'Python_Icon.png'}/>
                                <img className='tech-img col-md-4 col-sm-6 pb-2' src={'PHP_Icon.png'}/>
                                <img className='tech-img col-md-4 col-sm-6 pb-2' src={'Node_Icon.png'}/>
                                <img className='tech-img col-md-4 col-sm-6 pb-2' src={'Java.png'}/>
                            </center>
                            </div>


                            <h3 className="text-uppercase mx-auto"><center>Databases</center></h3>
                            <div class="paragraph py-4">
                            <center>
                                <img className='tech-img col-md-4 col-sm-6 pb-2' src={'MySQL_Icon.png'}/>
                                <img className='tech-img col-md-4 col-sm-6 pb-2' src={'MongoDB_Icon.png'}/>
                                
                            </center>
                            </div>
                           
                        </div>
                        <div class="col-lg-6 col-md-12 pt-5">
                            <div class="about-image mx-auto">
                                <img src={skill} alt="About us" class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
        )
    }
}