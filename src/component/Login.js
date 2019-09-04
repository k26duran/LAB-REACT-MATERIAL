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
        this.state = {email:'', password: ''};    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswdChange = this.handlePasswdChange.bind(this);
    }
    
    loggedIn(){
        const { email , password} = this.state;
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
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    onChange={this.handleEmailChange} 
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
                                    onChange={this.handlePasswdChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                                onClick = {this.loggedIn()}
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
export default Login;