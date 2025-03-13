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
      className="section"
      style={{
        flex: 'column',
        backgroundColor: backgroundColor,
      }}>
      <div
        style={{
          borderTopLeftRadius: '25px',
          color: '#FAF9E7',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderBottomLeftRadius: '25px',
          borderTopRightRadius: '50px',
          borderBottomRightRadius: '50px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h2 style={{ color: "black" }}>{title}</h2>
      </div>
      <p style={{ fontSize: "0.875rem", lineHeight: "1.625" }}>
        {text}
      </p>
    </section>
  );
};

export default Card;