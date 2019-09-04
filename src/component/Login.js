import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css';

export class Login extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {email:"", password: ""};    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswdChange = this.handlePasswdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {email , password} = this.state;
        if(email!=="" && password!==""){
            localStorage.setItem(this.state.email, this.state.password);
            
        }
        console.log(this.state.email, this.state.password);
        console.log(localStorage.getItem(this.state.email) === this.state.password);
        if(localStorage.getItem(this.state.email) === this.state.password){
            localStorage.setItem("isLoggedIn", true);
            
        }
    }
    
    loggedIn(){
        const {email , password} = this.state;
        if(email!=="" && password!==""){
            localStorage.setItem('email', email);
            localStorage.setItem('password',password);
            localStorage.setItem('isLoggedIn', true);
        }
    }
    
    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    handlePasswdChange(e) {
        this.setState({
            password: e.target.value
        });
    }
    
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form id="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    onChange={(e)=>this.handleEmailChange(e)} 
                                    autoComplete="email" 
                                    autoFocus 
                                    value={this.state.email}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={(e)=>this.handlePasswdChange(e)}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                                                     
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}
