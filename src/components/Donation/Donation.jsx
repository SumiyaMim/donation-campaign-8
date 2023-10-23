/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import DonationCard from './DonationCard';

const Donation = () => {

  const [donation, setDonation] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isSeeAll,setIsSeeAll] = useState(false)

  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donation"));

    if (donateItems) {
      setDonation(donateItems);
    }
    else {
      setNofound("No Data Found");
    }
  }, []);

  return (
    <div className='px-8 md:px-10 lg:px-14 max-w-md md:max-w-3xl lg:max-w-7xl mx-auto'>
      {noFound ? <p className="h-[80vh] flex justify-center items-center font-semibold">{noFound}</p>
      :
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 pb-20'>
         {
          isSeeAll ? donation?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
          :
          donation?.slice(0,4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
         }
      </div>
      }
      <div className={isSeeAll ? 'hidden' : 'flex justify-center items-center -mt-10 pb-10'}>
        {donation.length > 4 &&
          <button onClick={()=>setIsSeeAll(!isSeeAll)}  className='bg-[#009444] rounded-md py-2 px-4 text-white font-medium text-sm'>
          See All 
          </button>
        }
      </div>
    </div>
  )
}

export default Donation
