
import React, { Component } from 'react'

export default class ExamHandlingEvent extends Component {
    isLogin_Co = false;
    showInfo = ()=>
    {
    //     if(this.isLogin_Co)
    //     return(
    //         <h1> welcom Cybersoft </h1>
    //    )
    //     else
    //     {
    //         return(
    //             <button className='btn btn-success' onClick={this.Login()}> Login</button>
    //        )
    //     }

         return   this.isLogin_Co? <h1> welcom Cybersoft </h1> : <button className='btn btn-success' onClick={this.Login}> Login</button>
    }
    Login = ()=>{
        this.isLogin_Co=!this.isLogin_Co;
        console.log(this.isLogin_Co);
        this.render();
    }
    render() {
        return (
            <div>
               {this.showInfo()}
            </div>
        )
    }
}
