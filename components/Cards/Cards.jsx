'use client'
import React from 'react';
import Card from './Card';

const Cards = () => {
  const cardsData = [
    {
      icon: "star-fill",
      title: "Empowering the Future",
      description: "We are dedicated to empowering individuals with skills, opportunities, and connections, driving meaningful personal and professional growth in a rapidly evolving world."
    },
    {
      icon: "links-fill",
      title: "Filling the Gaps",
      description: "Our mission is to bridge the gaps in education, mentorship, and career readiness, addressing the challenges faced by students and professionals alike."
    },
    {
      icon: "heart-fill",
      title: "Inclusive and Accessible",
      description: "We believe in creating a platform that is inclusive, accessible, and affordable, ensuring equal opportunities for everyone to thrive and succeed."
    },
    {
      icon: "lightbulb-fill",
      title: "Innovation with Purpose",
      description: "Every feature we design and every service we offer is focused on solving real-world problems and making a positive impact on our users' lives."
    },
    {
      icon: "team-fill",
      title: "Collaborative Ecosystem",
      description: "We foster a collaborative environment where users, mentors, and industry experts come together to share knowledge, exchange ideas, and grow collectively."
    },
    {
      icon: "shield-star-fill",
      title: "Commitment to Authenticity",
      description: "Our mission is rooted in authenticity and transparency, ensuring that our users can trust us as a partner in their journey toward success."
    }
  ];

  return (
    <div className="cards pt-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;