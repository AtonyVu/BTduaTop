import React, { Component } from 'react'
import ListKey from '../Listkey';
import State from '../State';


export default class HandlingEvent extends Component {
    name = "luan";
    HandleClick = ()=>{
        console.log(123);
    }
    HandleClickParam = ()=>{
        console.log(this.name);
    }
    render() {
        return (
            <div>
                {/* <p>Handling</p>
                <button className='btn btn-success w-25' onClick={this.HandleClick}>Click</button>
                <button className='btn btn-danger w-25 param' onClick={this.HandleClickParam}>Click</button>
                <ExamHandlingEvent/> */}
                <State/>
                <ListKey/>
            </div>
        )
    }
}
