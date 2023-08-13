import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out this epic destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItems
                     src='../../public/images/img-9.jpg'
                     text='Explore the hidden waterfall deep inside the Amazon Jungle'
                     label='Adventure'
                     path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards