import React from 'react';

interface CardProps {
  title: string;
  text: string;
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  text, 
  backgroundColor = '#478067' 
}) => {
  return (
    <section 
      className="card-section"
      style={{
        backgroundColor: backgroundColor,
      }}>
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <p className="card-text">
        {text}
      </p>
    </section>
  );
};

export default Card;