import React from 'react';
import Main from '.././Main/main';
import ProjectCard from '.././ProjectCard/projectcards';
import Dropdown from '.././Dropdown/dropdown';
import projects from '../.././Utilities/ProjectContainer';
import Fade from 'react-reveal/Fade';
import './projects.css';

export default class Projects extends React.Component {
    state={
        filters:null
    }
    render() {
        return(
        <Main>
                <section className="pt-5 pb-5 inner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-left">
                                <h1 className="mt-0 mb-3 text-white">Projects</h1>
                                <h4 className="mt-0 mb-3 text-white">Demontration of my work</h4>
                            </div>
                        </div>
                    </div>
                </section>

            
        <div align="center">
            {/* <Dropdown/> */}
            <button onClick={()=> this.setState({filters:null})} className="btn btn-secondary filter-button" data-filter="all">All</button>
            <button onClick={()=> this.setState({filters:['PHP']})} className="btn btn-secondary filter-button" data-filter="all">PHP</button>
            <button onClick={()=> this.setState({filters:['JavaScript']})} className="btn btn-secondary filter-button" data-filter="all">JavaScript</button>
        </div>
        <br/>
        <Fade>
            <div className="container mb-5">
                {/* {console.log(projects.filter(val => this.state.filters?.every(filt => val.technology.includes(filt))).map(val => val))} */}
                <div className="row">
                {
                    this.state.filters? projects.filter(val => this.state.filters?.every(filt => val.technology.includes(filt))).map((val,key) => {
                    return (
                      
                            <div className="col-sm-4 project__card">
                                <ProjectCard key={key} id={projects.indexOf(val)}/>
                            </div>
                       
                        );
                    }): projects.map((val,key) => {
                        return (
                           
                                <div className="col-sm-4 project__card">
                                    <ProjectCard key={key} id={key}/>
                                </div>
                            
                            );
                        })
                }
                </div>
            </div>
        </Fade>
        </Main>
        );
    }
}
