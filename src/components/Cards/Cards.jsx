/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ cards }) => {
  
  return (
    <div className="py-20 px-8 md:px-10 lg:px-14 max-w-md md:max-w-3xl lg:max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        {
          cards?.map(card => <Card key={card.id} card={card}></Card>)
        }             
      </div>
    </div>
  );
};

export default Cards;
