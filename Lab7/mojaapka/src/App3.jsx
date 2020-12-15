import React, { Component } from "react";
import { Paper, TextField, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText, ListItemSecondaryAction,  IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons'

class App extends Component{
    constructor(){
        super();
        this.state = {
            exercises: [
                { id: 1, title: 'Bench Press' },
                { id: 2, title: 'Deadlift' },
                { id: 3, title: 'Squats' }
            ]
        }
        this.handleChange = ({ target: { name, value } }) => this.setState({[name]: value});
        this.handleCreate = e => {    e.preventDefault()
            if (this.state.title) {
                this.setState(({ exercises, title }) => ({
                    exercises: [ ...exercises,  { title, id: Date.now() } ],
                    title: ''
                }))    
            }
        }
        this.handleDelete = id => this.setState(({ exercises }) => ({
            exercises: exercises.filter(ex => ex.id !== id)
        }))
    }

    render(){
        const { title, exercises } = this.state;
        return(
            <Paper>
                <Typography variant='h4' align="center" gutterBottom> Exercises from <b>freeCodeCamp</b></Typography>
                <form onSubmit={this.handleCreate}>
                    <TextField name='title' label='Exercise' value={title} onChange={this.handleChange} margin='normal'></ TextField> 
                    <Button type='submit' color='primary' variant='raised'> Create </Button> 
                    
                </form>
                <List>
                    {exercises.map(({ id, title }) =>
                    <ListItem key={id}>
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
                            <IconButton color='primary' onClick={() => this.handleDelete(id)}>
                                {<Delete />}
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    )}
                </List>
            </Paper>
        )
    }
}

export default App;