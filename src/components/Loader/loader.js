import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


export default class Loader extends React.Component{
    render(){
        const visibility = {
            display: "block"
        }
        return(
            <Spinner animation="grow" style={visibility}/>
        );
    }
}