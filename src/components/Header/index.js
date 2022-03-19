import React from 'react';

function Header(props) {
  return (
    <header>
      <h2>
        <a href="/">Bryce Stockman Web Development & Marketing</a>
      </h2>
      {props.children}
    </header>
  );
}

export default Header;
