import React from 'react';
import '../ProjectCard/projectcards.css';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';



function ControlledCarousel(props) {
    const [index, setIndex] = React.useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {
            Object.values(props.images).map(val => {
            return(
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={val}
                    alt="First slide"
                    />
                </Carousel.Item>
            )
            }) 
        }
      </Carousel>
    );
  }

function MyVerticallyCenteredModal(props) {
    return (
        
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <ControlledCarousel images={props.images}/>
        </Modal.Body>
      </Modal>
    );
  }
  
 export default function ImageCarousel(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
      
        <img src={props.image['Exam.PNG']} onClick={() => setModalShow(true)} className="align-self-center mr-3 mb-3 proj-img" alt="..."/>
  
        <MyVerticallyCenteredModal
            images={props.image}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
      </>
    );
  }