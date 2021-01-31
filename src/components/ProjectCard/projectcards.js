import React, {useState} from 'react';
import { withRouter} from 'react-router-dom';
import projects from '../.././Utilities/ProjectContainer';
import './projectcards.css';


function ProjectCard({id,history}) {
    const [condition, setCondition] = useState(false);

      const handleClick = () => {
      setCondition(!condition)
    }

    const redirect = () => {
        history.push(
            `/Projects/projectdetails/`,
            id
        )
    }

    return (
        <div>
            <div className="container_card">
                    <div className='icon_link py-3 px-1'>
                        <div>{projects[id].title}</div>
                        <button className='btn btn-sm btn-dark' onClick={redirect}>
                             Read More 
                        </button>
                    </div>
                    {console.log(projects[id].cardImage)}
                    <img src={projects[id].cardImage} className={ condition ? "picture_up picture" : "picture" } alt='Img'/>

                    <div className="chips pt-2">
                        { 
                            projects[id].technology.map((val,key) => {
                                return(
                                    <span key={key} className="badge badge-pill badge-dark">{val}</span>
                                    );
                                })
                            }
                    </div>
                    
                    <div className="navigation">
                        <div id="plusButton" className="plus" onClick={handleClick}>
                            <div className="plusHor"></div>
                            <div className={ condition ? "plusVer_active plusVer" : "plusVer" }></div>
                        </div>
                    </div>
                    <div className={ condition ? "options_show options" : "options" }>
                        <div className="icon_link">
                            <div className=''><a className='anchor' href='#'>Live<i className="fa fa-eye fa-lg px-1" aria-hidden="true"></i></a></div>
                            <div className=''><a className='anchor' href='#'>GitHub<i className="fa fa-github fa-lg px-1" aria-hidden="true"></i></a></div>    
                        </div>
                    </div> 
                </div>
        </div>

    )
}

export default withRouter(ProjectCard);
