import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu-icon">
        {/* Menu icon */}
	  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path fill="white" d="M3 18h18v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"/>
        </svg>
      </div>
      <h1 className="header__title">Notes</h1>
    </header>
  );
};

export default Header;

