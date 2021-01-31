import React from 'react';
import Main from '.././Main/main';
import './contact.css';
import Me from '../../Images/me.jpg';
import emailjs from 'emailjs-com';


export default class Contact extends React.Component {
    render() {
        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_ftnlyzw', 'template_1j7dypc', e.target, 'user_1XWcltW6TEXJPDhTPE9Fa')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
          }
        return(
            <Main>
                <>
                <footer id="footer" className="footer-bg py-4">
                    <div className='container '> 
                    <img src={Me} alt='Me' className='contactImage'/> 
                    <div className="social-media text-center py-2 mt-4">
                        <p className="greet pb-1 text-white">Liked My Work...Any Suggestions? Any Idea? Want to Hire?</p>
                        <p className="greet pb-1 text-white">Feel free to Connect!!</p>
                        <ul>
                            <li><a href="https://www.facebook.com/akshat.pandey.29"><i className="fa fa-facebook x"></i></a></li>
                            <li><a href="https://www.instagram.com/akshat.pandey29/?hl=en"><i className="fa fa-instagram x"></i></a></li>
                            <li><a href=""><i className="fa fa-google x"></i></a></li>2
                            <li><a href=""><i className="fa fa-linkedin x"></i></a></li>
                        </ul>
                    </div>
                    </div>
                    </footer>
                <div className="container">
                    <div className="row">  
                        <div id='form' class="nb-form">
                            <p className="title">Send a message</p>
                            <img  src="https://lh3.googleusercontent.com/-LvTWzTOL4c0/V2yhfueroyI/AAAAAAAAGZM/Ebwt4EO4YlIc03tw8wVsGrgoOFGgAsu4wCEw/w140-h140-p/43bf8578-86b8-4c1c-86a6-a556af8fba13" alt="" class="user-icon"/>
                            <form className='my-2' onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Name:" required/>
                            <input type="email" name="email" placeholder="Email:" required/>
                            <input type="tel" name="phone" placeholder="Phone:" required/>
                            <textarea name="message" placeholder="Message:" required></textarea>
                            <input type="submit" value="Send message"/>
                            </form>
                        </div>
                    </div>
                </div>
                </>
            </Main>
        )
    }
}