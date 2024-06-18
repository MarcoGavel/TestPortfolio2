import React, { useState } from 'react';

const Grid = () => {
  const [imageUrl, setImageUrl] = useState('https://picsum.photos/1920/1080');

  const changeImage = () => {
    // Update the imageUrl state with a new random image URL
    setImageUrl(`https://picsum.photos/1920/1080?${new Date().getTime()}`);

    // Force the page to reload
    window.location.reload(false);
  };

  return (
    <div className="grid p-3 mt-2">
      <div className="col-50">
        <h2>Hello I'm Marco Gavel</h2>
        <p>
          {Hello everyone! I'm Marco, a student with a great passion for computer science, the web, and graphic design. After years in the restaurant industry, at 36, I've decided to change my career path and pursue my dream of becoming a programmer and Web Developer.}
        </p>
        <a href="https://x.com/GavelCoding" className="button mb-2 p-2" target="_blank" rel="noopener noreferrer">Check my profile on X</a>
        <p>
          {Currently, I'm studying certified online courses to enhance my skills and improve every day. I've always believed in the importance of continuous learning and challenging oneself in new contexts, and stepping into this field at my age is evidence of that. I'll soon be building a solid portfolio.}
        </p>
      </div>
      <div className="col-50 p-2">
        <div className="cover" style={{
          backgroundImage: `linear-gradient(90deg, rgba(131,58,180,0.21) 0%, rgba(253,29,29,0.16373626373626375) 50%, rgba(252,176,69,0.15604395604395604) 100%), url(${imageUrl})`
        }}>
          <div className="cover__content">
            <h1>Here to Learn</h1>
            <h2>My journey started at the beginning of 2024</h2>
            <button className="button" onClick={changeImage}>Change image</button>
            <h2 style={{ marginTop: '20px' }}>My first certificate</h2>
            <a href="https://www.udemy.com/certificate/UC-fa4f4d28-4658-4ad4-8dfb-85d9253ed0eb/" className="button mb-2 p-2" target="_blank" rel="noopener noreferrer">Bootcamp 2024</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
