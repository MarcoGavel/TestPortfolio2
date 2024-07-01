import React from 'react';

const SiteCard = ({ title, imageUrl, videoUrl, description, link }) => {
  const openLink = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="site-card">
        <h3>{title}</h3>
        <div className="media-container" onClick={openLink}>
        {videoUrl ? (
          <video
            src={videoUrl}
            className="media"
            width="300"
            height="200"
            autoPlay
            loop
            muted
          />
        ) : (
          <img
            src={imageUrl}
            className="media"
            width="300"
            height="200"
            alt={title}
          />
        )}
      </div>
      <div className="site-card__info">
        
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Visit site</a>
      </div>
    </div>
  );
};

export default SiteCard;
