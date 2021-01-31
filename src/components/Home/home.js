import React from 'react';
import Main from '.././Main/main';
import  './home.css';
import Me from'../.././Images/me.jpg';
import Typical from 'react-typical';
import ReactParticles from 'react-particles-js';
import RubberBand from 'react-reveal/RubberBand';
import particlesConfig from '../../Utilities/particle-config';

export default class Home extends React.Component {
   
    render() {
        return(
            <Main>
                <Particles>
                <div className="siteheader">
                    <div className="leftside">
                        <RubberBand>
                        <img src={Me} alt='Home' className="rounded-circle"/>
                        </RubberBand>
                        <h2 className='text-white pt-3 name'>Hey_____________<br/> I am Akshat Pandey</h2>
                        <p className='text-white pt-1 desc'>I am a{' '}
                            <Typical
                            loop={Infinity}
                            wrapper='b'
                            steps={[
                                'Web Developer',
                                3000,
                                'Web Designer',
                                3000,
                                'Computer Science Graduate',
                                3000
                            ]}
                            />
                        </p>
                    </div>
                </div>
                </Particles>
            </Main>   
        )
    }
}


function Particles({ children }) {
    return (
      <div style={{ position: 'relative' }}>
        <ReactParticles
          params={particlesConfig}
          style={{
            position: 'absolute',
            zIndex: 1,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }}
        />
        {children && <>{children}</>}
      </div>
    );
  }