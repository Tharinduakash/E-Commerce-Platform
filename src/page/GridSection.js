import React from 'react';
import './GridSection.css';

import feature4 from '../assets/feature4.jpg';
import feature5 from '../assets/feature5.jpg';
import feature6 from '../assets/feature6.jpg';
import feature7 from '../assets/feature7.jpg';
import feature10 from '../assets/feature10.jpg';
import feature9 from '../assets/feature9.jpg';




function GridSection() {
  const gridItems = [
      {
        id: 1,
        title: 'Surfing',
        description: 'Ride the waves in Arugam Bay or Weligama - Sri Lanka is a surfer’s paradise with warm waters and beginner to pro-level waves.',
        image: feature4
      },
      {
        id: 2,
        title: 'Water Rafting',
        description: 'Get your adrenaline pumping in Kitulgala, where white-water rafting through lush rainforest and rocky rapids offers an unforgettable thrill.',
        image: feature5
      },
      {
        id: 3,
        title: 'Hot Air Balloon Ride',
        description: 'Float over cultural sites and jungle landscapes in Dambulla or Sigiriya for a magical sunrise view from above.',
        image: feature6
      },
      {
        id: 4,
        title: 'Beautiful Train Journey',
        description: 'Take the scenic train from Kandy to Ella and enjoy breathtaking views of tea plantations, misty hills, and colonial-era bridges.',
        image: feature7
      },
      {
        id: 5,
        title: 'Snorkeling',
        description: 'Explore vibrant coral reefs and marine life in Hikkaduwa or Pigeon Island—ideal for underwater photography and family fun.',
        image: feature10
      },
      {
        id: 6,
        title: 'Safari',
        description: 'Experience wild Sri Lanka on a jeep safari in Yala or Udawalawe National Park, where you can spot elephants, leopards, and exotic birds.',
        image: feature9
      },
  ];

  return (
    <section className="grid-section">
      <h2 className="section-title">Explore Island </h2>
      <div className="grid-container">
        {gridItems.map((item) => (
          <div key={item.id} className="grid-item">
            <img src={item.image} alt={item.title} className="grid-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GridSection;