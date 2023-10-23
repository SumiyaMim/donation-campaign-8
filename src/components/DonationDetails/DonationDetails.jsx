/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import DonationDetailsPage from './DonationDetailsPage';

const DonationDetails = () => {

    const [card, setCard] = useState({});

    const cards = useLoaderData();
    
    const { id } = useParams();
    const idInt = parseInt(id);

    useEffect(() => {
        const findCard = cards?.find((card) => card.id === idInt);
        setCard(findCard);
      }, [idInt, cards]);

  return (
    <div className='px-8 md:px-10 lg:px-14 max-w-md md:max-w-3xl lg:max-w-7xl mx-auto'>
      <DonationDetailsPage card={card}></DonationDetailsPage>
    </div>
  )
}

export default DonationDetails
