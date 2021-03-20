import React, { Component } from 'react'

export default class RenderingElement extends Component {
    username = "Vo";
    lop='BC03'
    getInfo = ()=>{
        return(
            <p>{this.username+" "+this.lop}</p>
        )
    }
    render() {
        return (
            <div>
                <h3>Rendering Ele</h3>
                {this.getInfo()}
            </div>
        )
    }
}
