import React from 'react';
import Main from '.././Main/main';
import './contact.css';
import Me from '../../Images/me.svg';
import emailjs from 'emailjs-com';


export default class Contact extends React.Component {
    constructor(props) 
        { 
            super(props); 
            this.state = {
                show : false
            }; 
        } 
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

          const appear = () => {
              if(!this.state.show)
              {
                this.setState({show:true});
            }
            else{
                this.setState({show:false});
            }
          }
        return(
            <Main>
                <>
                <footer id="footer" className="footer-bg py-4">
                    <div className='container'>
                        <img src={Me} alt='Me' className='contactImage'/> 
                        <div className="social-media text-center py-2 mt-4">
                            <p className="greet pb-1 text-white">Liked My Work...Any Suggestions? Any Idea? Want to Hire?</p>
                            <p className="greet pb-1 text-white">Feel free to Connect!!</p>
                            <ul>
                                <li><a href="https://www.facebook.com/akshat.pandey.29"><i className="fa fa-facebook x"></i></a></li>
                                <li><a href="https://www.instagram.com/akshat.pandey29/?hl=en"><i className="fa fa-instagram x"></i></a></li>
                                <li><a href=""><i className="fa fa-google x"></i></a></li>
                                <li><a href=""><i className="fa fa-linkedin x"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="container">
                    <div className="row">  
                        <div className={this.state.show ? 'nb-form__display nb-form':'nb-form'}>
                            <div className="title">
                            <p >Send a message</p>
                            <div className="wrap" onClick={appear}><span className={this.state.show?"arrow":"arrow active"}><span></span><span></span></span></div></div>
                            {/* <i onClick={appear} className={this.state.show ? 'user-icon fa fa-chevron-down fa-sm':'user-icon fa fa-chevron-up fa-sm'}/> */}
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