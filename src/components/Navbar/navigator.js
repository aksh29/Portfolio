import React from 'react';
import {NavLink} from 'react-router-dom';
import './navigator.css';

export default class Navigator extends React.Component {
  
  constructor(props) 
  { 
      super(props); 
      this.state = { nav : false,
                     show : true 
       }; 
  } 
    openNav = ()=>{
      if(!this.state.nav){ 
          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("desktopMenu").style.display = "inherit";
          this.setState({nav:true});
      }

      else{
        document.getElementById("mySidenav").style.width = "0";
        this.setState({nav:false});
      }
  }
  //   closeNav = ()=>{
  //   document.getElementById("mySidenav").style.width = "0";
  //  }
    render() {
      return (
          <header className="App-header">
            <div className="logo">{'<Akshat/>'}</div>
            <div id="mySidenav" className="sidenav">
              {/* <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a> */}
              <ul id="desktopMenu">
                <li><NavLink activeClassName='active' to={'/Home'} onClick={this.closeNav}>Home</NavLink></li>
                <li><NavLink activeClassName='active' to={'/Projects'} onClick={this.closeNav}>Projects</NavLink></li>
                <li><NavLink activeClassName='active' to={'/About'} onClick={this.closeNav}>About</NavLink></li>
                <li><NavLink activeClassName='active' to={'/Contact'} onClick={this.closeNav}>Contact</NavLink></li>
              </ul>
            </div>
            {/* <span className="menubar" onClick={this.openNav}>
             
            </span> */}

            <div className="menubar" onClick={this.openNav}>
              <div onClick={() => this.setState({show: !this.state.show})} className={this.state.show? 'hamburger': 'hamburger active'}>
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
              </div>
            </div>
          </header>
      )
    }
  }