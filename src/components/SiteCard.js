import React from 'react';

const SiteCard = ({ title, imageUrl, description, link }) => {
  const openLink = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="site-card">
        <h3>{title}</h3>
      <img src={imageUrl} alt={title} onClick={openLink} />
      <div className="site-card__info">
        
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Visit site</a>
      </div>
    </div>
  );
};

export default SiteCard;
