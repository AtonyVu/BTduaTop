import React, { Component } from 'react'
import data1 from './data1.json'
export default class Example extends Component {


    constructor(props)
  {
        super(props);
        this.state={
            listMovie:data1
        }
  }

  renderList =() =>{
      const list = this.state.listMovie.map((item)=>{
           return( <div className='container'>
           <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <img className='card-img-top' src='./img/lt_rog.png' alt='luan'></img>
                        <div className='card-body'>
                             <h4 className='card-title'>{item.biDanh}</h4>
                             <p className='card-text'>{item.danhGia}</p>
                        </div>
                    </div>
                </div>
                
           </div>
           
       </div>);

      });
      return list;
  }
    render() {
        return (
           <div>  {this.renderList()}</div>
        )
    }

}
