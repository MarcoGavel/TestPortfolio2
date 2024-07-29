// ProjGrid.js

import React from 'react';
import SiteCard from './SiteCard';
import anteprima1 from "../imgs/anteprima1.png";
import ant2 from "../imgs/ant2.mp4";
import proj3 from "../imgs/proj3.mp4";
import proj4 from "../imgs/proj4.mp4";

const ProjGrid = () => {

  const sites = [
    {
      title: 'Phrases generator',
      imageUrl: anteprima1, 
      description: 'it\'s a small test in <strong>Python</strong>, all very basic',
      link: 'https://phrase-python-simulator.vercel.app/',
    },
    {
      title: 'Page Slider',
      videoUrl: ant2, 
      description: 'A <strong>page slider</strong> in html-css and very little JS',
      link: 'https://5pageslider.netlify.app/',
    },
    {
      title: 'Form Step Validator',
      videoUrl: proj3, 
      description: 'A <strong>Login page</strong> with css and JS, no DataBase',
      link: 'https://form-step-validator.netlify.app/',
    },
    {
      title: 'Note App',
      videoUrl: proj4, 
      description: 'A simply <strong>Note App</strong> with Drag and Drop!',
      link: 'https://noteappdragdrop.netlify.app/',
    },
  ];

  return (
    <div className="proj-grid-container">
      {sites.map((site, index) => (
        <SiteCard
          key={index}
          title={site.title}
          imageUrl={site.imageUrl}
          videoUrl={site.videoUrl}
          description={site.description}
          link={site.link}
        />
      ))}
    </div>
  );
};

export default ProjGrid;
