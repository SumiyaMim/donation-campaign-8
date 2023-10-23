/* eslint-disable no-unused-vars */
import React from 'react'
import swal from 'sweetalert';

const DonationDetailsPage = ({card}) => {

    const { id, title, picture, price, description, text_button_color } = card || {};

    const handleDonate = () => {
        const donationArray = [];
        const donateItems = JSON.parse(localStorage.getItem("donation"));

        // if no data found
        if (!donateItems) {
          donationArray.push(card);
          localStorage.setItem("donation", JSON.stringify(donationArray));
          swal("Good job!", "Successfully donate!", "success");
        }
        // if exist any data
        else {
          const isExits = donateItems.find((category) => category.id === id);

          if (!isExits) {
              donationArray.push(...donateItems, card);
              localStorage.setItem("donation", JSON.stringify(donationArray));
              swal("Thank you!", "Successfully donate!", "success");
          }
          else {
            swal("Sorry!", "Already donate!", "error");
          }
        }
    }

  return (
    <div className="pt-6 pb-20">
      <div className='relative'>
        <img src={picture} className="rounded-md w-full max-h-[350px] lg:max-h-[450px]"/>
        <div className="absolute left-0 bottom-0 w-full h-20 bg-black bg-opacity-50 rounded-b-md">
            <button onClick={handleDonate} style={{backgroundColor: text_button_color}} className='absolute left-6 bottom-5 rounded py-2 px-3 text-white font-semibold'>Donate ${price}</button>
        </div>
      </div>

      <h1 className='pt-10 pb-4 text-2xl font-extrabold'>{title}</h1>
      <p className='text-[#0B0B0B] opacity-70 text-sm font-medium text-justify'>{description}</p>
    </div>
  )
}

export default DonationDetailsPage
