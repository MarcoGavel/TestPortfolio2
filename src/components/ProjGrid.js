// ProjGrid.js

import React from 'react';
import SiteCard from './SiteCard';
import anteprima1 from "../imgs/anteprima1.png";
import ant2 from "../imgs/ant2.mp4";
import proj3 from "../imgs/proj3.mp4";

const ProjGrid = () => {

  const sites = [
    {
      title: 'Mini Proj 1',
      imageUrl: anteprima1, 
      description: 'A little Python prj: Motivational phrases generator',
      link: 'https://phrase-python-simulator.vercel.app/',
    },
    {
      title: 'Page Slider',
      videoUrl: ant2, 
      description: 'A page slider in html-css and very little JS',
      link: 'https://5pageslider.netlify.app/',
    },
    {
      title: 'Form Step Validator',
      videoUrl: proj3, 
      description: 'A little work with css and JS',
      link: 'https://form-step-validator.netlify.app/',
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
