import React from 'react';

const Cover = () => {
  return (
    <div className="cover" style={{ backgroundImage: "linear-gradient(90deg, rgba(131,58,180,0.21) 0%, rgba(253,29,29,0.16373626373626375) 50%, rgba(252,176,69,0.15604395604395604) 100%), url('https://picsum.photos/1920/1080')" }}>
      <div className="cover__content">
        <h1> MARCO </h1><br /> <h1> GAVEL</h1>
        <h2> An Aspiring Web Dev </h2>
      </div>
    </div>
  );
}

export default Cover;
