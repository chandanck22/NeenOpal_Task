import React, { useState, useEffect } from 'react';
import './Cards.css';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setCards(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteClick = (cardId) => {
    // if (window.confirm('Are you sure you want to delete this card?')) {
      // Filter out the deleted card from the cards array
      const updatedCards = cards.filter((card) => card.id !== cardId);
      setCards(updatedCards);
    // }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="main_container">
      {/* Render each card */}
      {cards.map((card) => (
        <div key={card.id} className="card_container">
          <a href="#" className="card_image_container">
            <img
              src={`https://source.unsplash.com/random/600x400?${card.name}`}
              alt="card image"
              className="card_image"
              loading="lazy"
            />
          </a>
          <div className="card_title_container">
            <h2 className="card_name">{card.name}</h2>
            <div className="card_details">
              <p><i className="ri-mail-fill"></i>{card.email}</p>
              <p><i className="ri-phone-fill"></i>{card.phone}</p>
              <p><i className="ri-global-fill"></i>{card.website}</p>
            </div>
          </div>

          <div className="card_footer_container">
            <div className="card_tag_container">
              <a href=""><i className="ri-service-fill"></i></a>
            </div>
            <div className="card_tag_container">
              <a href="#"><i className="ri-edit-fill"></i></a>
            </div>
            <div className="card_tag_container">
              <a href="#" onClick={() => handleDeleteClick(card.id)}><i className="ri-delete-bin-7-fill"></i></a>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Cards;
