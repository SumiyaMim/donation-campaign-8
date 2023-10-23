/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const DonationCard = ({card}) => {

    const { id, title, picture, category_name, price, category_bg, card_bg, text_button_color } = card || {};

  return (
    <div style={{backgroundColor: card_bg}} className='rounded-md flex h-44 md:h-40'>
        <img src={picture} className='w-44 md:w-52 rounded-l-md h-full'/>
        <div className='p-5'>
            <p style={{backgroundColor: category_bg, color: text_button_color}} className='text-xs w-fit px-1.5 py-0.5 rounded-sm font-medium'>{category_name}</p>
            <h2 className='text-sm md:text-lg font-semibold mt-1'>{title}</h2>
            <h3 style={{color: text_button_color}} className='text-xs md:text-sm font-bold pb-3 mt-0.5'>S{price}</h3>
            <Link to={`/donations/${id}`}>
                <button style={{backgroundColor: text_button_color}} className='rounded py-1 px-3 text-white font-medium text-sm'>View Details</button>
            </Link>
        </div>
    </div>
  )
}

export default DonationCard
