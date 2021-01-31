import React,{useState, useEffect} from 'react';
import ImageCarousal from '../Image-carousal/image-carousal';
import {NavLink} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import projects from '../.././Utilities/ProjectContainer';
import Main from '.././Main/main';
import './projectdetail.css';

function Projectdetail(props) {
    const [terms,setTerms] = useState(null);
    // const {id} = useParams(); 
    useEffect(() => {
        fetch(projects[props.location.state].desc).then((response) => response.text()).then((text) => {
            setTerms(text)
          })
    }, [])

    return (
        <Main>
            <div className="media mb-3 flex-wrap mt-5">
                <div className="media-body col-lg-8 mt-3 mx-auto">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><NavLink to={'/Projects'}>Projects</NavLink></li>
                        <li class="breadcrumb-item active" aria-current="page">Project</li>
                    </ol>
                </nav>

                    <div>
                            {projects[props.location.state].title}
                    </div>
                    {/* About Project markdown */}
                    <div className="content">
                        <ReactMarkdown source={terms} />
                    </div>
                    
                </div>
            </div>
        </Main>
    )
}

export default Projectdetail;
