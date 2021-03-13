import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import SideBar from './components/sidebar';
import Header from './components/header'

class App extends Component {

  state = {

  }



  listGroup = [
    { _id: 1, iconClass: 'fa fa-home', label: 'Home' },
    { _id: 2, iconClass: 'fa fa-home', label: 'Notice Board' },
    { _id: 3, iconClass: 'fa fa-home', label: 'Fees Detail' },
    { _id: 4, iconClass: 'fa fa-home', label: 'Attendence' },
    { _id: 5, iconClass: 'fa fa-home', label: 'Calender' },
    { _id: 6, iconClass: 'fa fa-home', label: 'Multimedia' },
    { _id: 7, iconClass: 'fa fa-home', label: 'Time Table' },
    { _id: 8, iconClass: 'fa fa-home', label: 'Schedule' },
    { _id: 9, iconClass: 'fa fa-home', label: 'Support Request' },
    { _id: 10, iconClass: 'fa fa-flag', label: 'Support' },
    { _id: 11, iconClass: 'fa fa-user', label: 'Account' },
  ]

  render() {
    return (
      <div className='row'>
        <div className='col-3'>
          <div className="text-center">
            <img src={logo} className="App-logo p-3" alt="logo" />
          </div>
          < SideBar listGroup={this.listGroup} />
        </div>
        <div className='vl mx-4'></div>  
        <div className='col-8 my-3'>
          <Header />
          <Home />
        </div>
      </div>
    );

  }
}

export default App;
