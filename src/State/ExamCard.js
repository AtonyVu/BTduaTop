import React, { Component } from 'react'



export default class ExamCard extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            img:'./img/imgBlackCar.jpg',
        }
    }
    setCar = async (name)=>
    {
          await    this.setState({img:"./img/"+name+".jpg"});
          console.log(this.state.img);
    }
    render() {
        const {img } =this.state;
        return (
            <div className="container">
                <h3>Example</h3>
                <div className='row'>
                   <div className='col-md-6'>
                   <img className='img-fluid' alt='luan' src={img}></img>
                   </div>
                   <div className='col-md-6'>
                   <button className='btn btn-danger' onClick={()=>this.setCar("imgRedCar")}>RED</button>
                    <button className='btn btn-light'onClick={()=>this.setCar("imgSilverCar")}>Siver</button>
                    <button className='btn btn-dark'onClick={()=>this.setCar("imgBlackCar")}>Back</button>
                   
                   </div>
                </div>
            </div>
        )
    }
    
}
