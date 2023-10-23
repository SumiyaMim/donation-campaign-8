/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({card}) => {

    const { id, title, picture, category_name, category_bg, card_bg, text_button_color } = card || {};

  return (
    <Link to={`/donations/${id}`}>
        <div style={{backgroundColor: card_bg}} className='rounded-md'>
          <img src={picture} className='w-full rounded-t-md h-36'/>
          <div className='p-3'>
             <p style={{backgroundColor: category_bg, color: text_button_color}} className='text-xs w-fit px-1.5 py-0.5 rounded-sm font-medium'>{category_name}</p>
             <h2 style={{color: text_button_color}} className='text-sm font-bold mt-1'>{title}</h2>
          </div>
        </div>
    </Link>
    
  )
}

export default Card
