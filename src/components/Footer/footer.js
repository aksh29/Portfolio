import React from 'react';
import './footer.css';

export default class Footer extends React.Component{
    render(){
        return(
                <>
                    <footer id="footer" className="footer-bg py-4">
                    <div className='container'>  
                    <div className="social-media text-center py-2">
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
                    <div className="copyright text-center footer-bg text-white py-2">
                        <p className="font-rale greet">&copy; Copyrights 2020. Designed By <b>Akshat Pandey</b></p>
                    </div>
                </>
        );
    }

}