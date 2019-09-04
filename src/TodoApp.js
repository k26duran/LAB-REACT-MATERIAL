import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {TodoList} from './TodoList'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';
import { TextField, CardActionArea, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import './component/Login.css';

export class TodoApp extends React.Component {

constructor(props) {

    super(props);
    this.state = {items: [], text: '', priority: 0, dueDate: moment()};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
}

render() {    
    return (
    <React.Fragment>
     <CssBaseline />
        <main className="layout">      
        <Card className="Todo">
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit} className="form">
                <Typography variant="headline">New TODO</Typography>
                <TextField
                    id="text"
                    label="Text"                  
                    onChange={this.handleTextChange}
                    value={this.state.text}
                    margin="normal"
                >
                </TextField>
                <br></br>
                <TextField
                    id="priority"
                    label="Priority"
                    type="number"
                    onChange={this.handlePriorityChange}
                    value={this.state.priority}
                    margin="normal"
                >
                </TextField>
                <br></br>
                <br></br>
                <DatePicker
                    id="due-date"
                    selected={this.state.dueDate}
                    placeholderText="Due date"
                    onChange={this.handleDateChange}>
                </DatePicker>
                <br></br>
                <br></br>
                <Button type="submit" variant="raised" color="primary" className="submit">
                    Add #{this.state.items.length + 1}
                </Button>
            </form>
            <br />
            <TodoList todoList={this.state.items}/>
        </Card>
     
     </main>
    </React.Fragment>
    );
}

handleTextChange(e) {
    this.setState({
        text: e.target.value
    });
}

handlePriorityChange(e) {
    this.setState({
        priority: e.target.value
    });
}

handleDateChange(date) {
    this.setState({
        dueDate: date
    });
}

handleSubmit(e) {

    e.preventDefault();

    if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
        return;

    const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        dueDate: this.state.dueDate,

    };
    this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: '',
        priority: '',
        dueDate: ''
    }));
}

}
