// ProjGrid.js

import React from 'react';
import SiteCard from './SiteCard';
import anteprima1 from "../imgs/anteprima1.png"

const ProjGrid = () => {
  // Array di esempio con i dati dei siti
  const sites = [
    {
      title: 'Mini Proj 1',
      imageUrl: anteprima1, // Immagine e anteprima del sito
      description: 'A little Python prj: Motivational phrases generator',
      link: 'https://phrase-python-simulator.vercel.app/',
    },
    {
      title: 'proj 2',
      imageUrl: 'https://picsum.photos/300/200', // Immagine e anteprima del sito
      description: 'Under Development...',
      link: 'https://gaveltestportfolio.netlify.app/',
    },
    {
      title: 'proj 3',
      imageUrl: 'https://picsum.photos/300/200', // Immagine e anteprima del sito
      description: 'Under Development...',
      link: 'https://gaveltestportfolio.netlify.app/',
    },
  ];

  return (
    <div className="proj-grid-container">
      {sites.map((site, index) => (
        <SiteCard
          key={index}
          title={site.title}
          imageUrl={site.imageUrl}
          description={site.description}
          link={site.link}
        />
      ))}
    </div>
  );
};

export default ProjGrid;
