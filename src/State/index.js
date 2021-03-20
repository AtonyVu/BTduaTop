import React, { Component } from 'react'
import ExamCard from './ExamCard'

export default class State extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            isLogin:false,
        }
    }
    showInfo = ()=>
    {
         return   this.state.isLogin?<h1> welcom Cybersoft </h1> : <button className='btn btn-success' onClick={this.Login}> Login</button>
    }
    Login =  async()=>{
       await this.setState({isLogin:true})
       console.log(this.state.isLogin)
    }
    render() {
        return (
            <div>
               <ExamCard/>
            </div>
        )
    }
}
