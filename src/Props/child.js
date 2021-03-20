import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props)
{
      super(props);
      this.state ={
          username:'vo'
      }
    }
    handleReset =()=>{
        this.props.getReset("LuanVoThanh")
    }
    render() {
        return (
            <div>
                {this.props.data +" "+this.props.data1}
                <button onClick={this.handleReset}>Reset Child</button>
            </div>
        )
    }
}
