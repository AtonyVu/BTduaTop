import React, { Component } from 'react'

export default class ListKey extends Component {
    renderTable = () => {
        const { listProduct } = this.state;
        const arr = listProduct.map((item, index) => {
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
            )
        })
        return arr
    }
    constructor(props) {
        super(props);
        this.state = {
            listProduct: [{ id: 1, name: 'iphone', price: 1234 }, { id: 2, name: 'iphone2', price: 12345 }, { id: 3, name: 'iphone3', price: 123456 }],
        }
    }
    render() {
        return (
            <div className>
                <h1>ListKey</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()};
                      </tbody>
                </table>
            </div>
        )
    }
}
