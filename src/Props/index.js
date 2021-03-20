import React, {  Component } from 'react'
import Child from './child'
import ChildFunc from './childFunc'
import Children from './children'
export default class Index extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username:'vo',
            lop:"BC-03"
        }
    }
    change = ()=>
    {
         this.setState({username :"CyberSoft"})
    }
    onChange1=(event)=>{
        this.setState({username : event.target.value})
    }
    handleReset=(resetUser)=>{
             this.setState({username : resetUser})
    }
    render() {
        return (
            <div>
                {this.state.username}
                <Child data={this.state.username} data1={this.state.lop} getReset={this.handleReset}/>
                <ChildFunc data={this.state.username}/>
                  <Children>
                      <h1>Vo</h1>
                      <h2>Thanh</h2>
                      <h3>Luan</h3>
                  </Children>
                  <button className='btn btn-danger' onClick={this.change}>ChangeName</button>
                  <input onChange={ this.onChange1}></input>
            </div>
        )
    }
}
