import React, {Component} from "react";

import './App.css';
import WriteH1 from './WriteH1';
// import Component1 from './Component1';
// import Component2 from './Component2';
import ListEl from './ListElement';
import fnButton from './Klik';

class App extends Component{
    constructor(){
        super();
        this.state = {
            title: [
                {id: 0, name: "Laboratorium 6 - React"}
            ],
            elements: [
                {id: 0, name: "Pierwszy", count: "1"},
                {id: 1, name: "Drugi", count: "2"},
                {id: 2, name: "Trzeci", count: "3"}
            ],
            button:[
                {id: 0, function: "alert('Przycisk robi KLIK!!!)"}
            ]
        }
    }
    render(){
        const my_Header = this.state.title.map(el =>{
            return <WriteH1 key={el.id} text={el.name} />
        })
        const my_List = this.state.elements.map(el =>{
            return <ListEl key={el.key} name={el.name} count={el.count} />
        })
        // const my_Button = this.state.button.map(el => {
        //     return <fnButton key={el.key} function={el.function} />
        // })
        return(
            <div>
                {my_Header}
                <ol>
                    {my_List}
                </ol>
                {/* {my_Button} */}
            </div>
        )
    }
}

export default App;