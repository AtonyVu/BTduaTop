import React from 'react'
import CardItem from './CardItem'
class CardList extends React.Component 
{
    render()
    {
        return(
            <div className='row'>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>
        )
    }
}
export  default CardList;