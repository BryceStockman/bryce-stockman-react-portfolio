import React, { useEffect } from 'react';

function Nav(props) {
  const { setCurrentPage } = props;

  return (
    <nav>
      <ul>
        <li key="about">
          <span onClick={() => setCurrentPage('about')}>About Me</span>
        </li>
        <li key="project">
          <span onClick={() => setCurrentPage('project')}>Projects</span>
        </li>
        <li key="contact">
          <span onClick={() => setCurrentPage('contact')}>Contact</span>
        </li>
        <li key="resume">
          <span onClick={() => setCurrentPage('resume')}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
