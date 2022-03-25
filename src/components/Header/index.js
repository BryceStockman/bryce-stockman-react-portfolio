import React from 'react';

function Header(props) {
  return (
    <header className="flex-row space-between mx-2 my-2">
      <h2>
        <a href="/">Bryce Stockman Web Development & Marketing</a>
      </h2>
      {props.children}
    </header>
  );
}

export default Header;
