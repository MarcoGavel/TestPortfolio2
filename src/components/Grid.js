import React, { useState } from 'react';

const Grid = () => {
    const [imageUrl, setImageUrl] = useState('https://source.unsplash.com/random');

    const changeImage = () => {
      setImageUrl(`https://source.unsplash.com/random?${new Date().getTime()}`);
    };
    
    return (
      <div className="grid p-3 mt-2">
        <div className="col-50">
          <h2>Hello I'm Marco Gavel</h2>
          <p>
            🚀 After years in the restaurant industry, at 36, I've decided to change my career path and pursue my dream of becoming a programmer and web developer. I've always been hands-on with PCs, hardware, and graphic design. Now, I aim to build a career in this field.<br />
            <br />🎓 Currently, I'm studying certified online courses to enhance my skills and improve every day. I've always believed it's never too late to learn. I graduated in history at the age of 25, and I'm always nurturing new passions. The decision to learn web development at my age is a testament to that. Soon, I'll build a strong portfolio.
          </p>
          <a href="https://x.com/GavelCoding" className="button mb-2 p-2" target="_blank" rel="noopener noreferrer">Check my profile on X</a>
          <p>
            🌍 Based in Bologna (IT) and open to relocation and remote work.<br />
            ✉️ You can reach me at MarcoGavel@gmail.com<br />
            🧠 I'm learning full-stack Web Design on Udemy, Freecodecamp, Coursera, and YouTube.<br />
            🤝 I'm open to collaborating with anyone in need of assistance from someone with no experience but with a strong willingness to learn!
          </p>
        </div>
        
        <div className="col-50 p-2">
            <div className="cover" style={{ backgroundImage: `linear-gradient(90deg, rgba(131,58,180,0.21) 0%, rgba(253,29,29,0.16373626373626375) 50%, rgba(252,176,69,0.15604395604395604) 100%), url(${imageUrl})` }}

            <div className="cover__content">
              <h1> Here to Learn</h1>
                <h2>My journey started at the beginning of 2024</h2>
                <button className="button" onClick={changeImage}>Don't like this image?</button> 
                <h2 style={{ marginTop: '20px' }}>My first certificate</h2>
                
                <a href="https://www.udemy.com/certificate/UC-fa4f4d28-4658-4ad4-8dfb-85d9253ed0eb/" className="button mb-2 p-2" target="_blank" rel="noopener noreferrer">Bootcamp 2024</a>

            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Grid;
