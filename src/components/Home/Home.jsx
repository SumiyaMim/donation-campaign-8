/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import { useLoaderData } from 'react-router-dom'; 

const Home = () => {

  const cards = useLoaderData();
  const [filteredCards, setFilteredCards] = useState([]);

  const handleSearch = (searchCategory) => {
    const search = searchCategory.toLowerCase().trim();
    const filtered = cards.filter((card) =>
      card.category_name.toLowerCase().includes(search)
    );
    setFilteredCards(filtered);
  };

  return (
    <div>
      <div className="relative bg-[url('https://i.ibb.co/Zgbz67s/banner.png')] bg-no-repeat bg-slate-200 bg-blend-screen bg-center lg:bg-cover">
        <Navbar></Navbar>
        <Banner onSearch={handleSearch}></Banner>
      </div>
      <Cards cards={filteredCards.length > 0 ? filteredCards : cards}></Cards>
    </div>
  );
};

export default Home;
