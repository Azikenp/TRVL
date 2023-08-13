import React from 'react'
import {Link } from 'react-router-dom';
import './Cards.css'

function CardItems(props) {
  return (
    <div>
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards
                    __item__pic-wrap'>
                        <img src={props.src} alt="Travel image" className='cards__item__image'/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className='cards__item__text' />
                    </div>
                </Link>
            </li>
        </>

    </div>
  )
}

export default CardItems