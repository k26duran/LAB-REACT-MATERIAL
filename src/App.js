import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from './component/Login';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { TodoApp } from './TodoApp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
class App extends Component {

    CorrectView(isLogged) {
        const LoginView = () => (
            <Login/>
        );
        const TodoView = () => (
            <TodoApp/>  
        );

        if (isLogged) {
          return (
            <div>
                <ul>
                    <li><Link to="/todo">Todo</Link></li>
                </ul>
                    <Route path="/todo" component={TodoView}/>
            </div>
          );
        }
        
        return (
            <div>
                <ul>
                    <li><Link to="/">Login</Link></li>
                </ul>
                <Route exact path="/" component={LoginView}/>
            </div>
            );
      }

    render() {

       if(localStorage.getItem('isLoggedIn')=== undefined || localStorage.getItem('isLoggedIn')=== null){
            localStorage.setItem('isLoggedIn',false)
       } 
       const isLoggedIn = localStorage.getItem('isLoggedIn');
       console.log(isLoggedIn);
          
        return (
            <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <div>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <Link to="/">Login</Link>
                        </ListItem>
                        <Divider light/>
                        <ListItem button divider>
                            <Link to="/todo">Todo</Link>   
                        </ListItem>
                    </List>
                </div>
                <br/>
                <div>
                    {this.CorrectView(isLoggedIn)}
                </div>
            </div>
        </Router>
        );
    }

}

export default App;
