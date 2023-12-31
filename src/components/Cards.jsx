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
                     src='/images/img-9.jpg'
                     text='Explore the hidden waterfall deep inside the Amazon Jungle'
                     label='Adventure'
                     path='/services'
                    />
                     <CardItems
                     src='/images/img-2.jpg'
                     text='Travel through the islands of Bali in a private cruise'
                     label='Luxury'
                     path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItems
                     src='/images/img-3.jpg'
                     text='Set Sail In The Atlantic Ocean Visiting Uncharted Waters'
                     label='Mystery'
                     path='/services'
                    />
                     <CardItems
                     src='/images/img-4.jpg'
                     text='Experience Football On Top Of The Himilayan Mountains'
                     label='Adventure'
                     path='/services'
                    />
                     <CardItems
                     src='/images/img-8.jpg'
                     text='Ride Through The Sahara Desert on a guided Camel Tour'
                     label='Adrenaline'
                     path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards