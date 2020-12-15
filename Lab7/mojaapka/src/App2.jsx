import React, { Component } from "react";
import { List, ListSubheader } from '@material-ui/core';

import WriteH1 from './WriteH1';
import ListEl from './ListElement';

class App extends Component{
    constructor(){
        super();
        this.state = {
            title: [
                {id: 0, name: "Laboratorium 6 - React"}
            ],
            elements: [
                { id: 0, name: "Śniadanie", time: "07:00" },
                { id: 1, name: "Obiad", time: "15:00" },
                { id: 2, name: "Kolacja", time: "19:30" }
            ]
        }
    }
    render(){
        const my_Header = this.state.title.map(el =>{
            return <WriteH1 key={el.id} text={el.name} />
        })
        const my_List = this.state.elements.map(el =>{
            return <ListEl key={el.key} name={el.name} time={el.time} />
        })
       
        return(
            <div>
                {my_Header}
                <List subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Posiłki
                    </ListSubheader>
                }>
                    {my_List}
                </List>
            </div>
        )
    }
}

export default App;