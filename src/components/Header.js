import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const item = document.querySelector('.icon-hamburger');
    if (item) {
      const handleToggleMenu = () => {
        document.body.classList.toggle('menu-open');
      };
      item.addEventListener('click', handleToggleMenu);

      // Cleanup function to remove the event listener
      return () => {
        item.removeEventListener('click', handleToggleMenu);
      };
    }
  }, []);
  
    return (
<header class="header">
    <div class="header__content">
      <a href="https://x.com/GavelCoding">
        <img class="header__logo" src="https://pbs.twimg.com/profile_images/1780907423802310656/yZrgTvFH_400x400.jpg" alt="Logo" />
    
      </a>
        
    
      <ul class="header__menu">
        <li><a href="https://github.com/MarcoGavel" target="_blank">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/marcogavel" target="_blank">Linkedin</a></li>
        <li><a href="mailto:marcogavel@gmail.com" target="_blank">Email</a></li>
      </ul>
      <div class="header__quick">
        <a href="https://linktr.ee/marcogavel">My Linktree</a>
        <div class="icon-hamburger">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
    );
}

export default Header;