import React from 'react';

function Nav(props) {
  const { setCurrentPage } = props;

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2 py-2" key="about">
          <span onClick={() => setCurrentPage('about')}>About Me</span>
        </li>
        <li className="mx-2 py-2" key="project">
          <span onClick={() => setCurrentPage('project')}>Projects</span>
        </li>
        <li className="mx-2 py-2" key="contact">
          <span onClick={() => setCurrentPage('contact')}>Contact</span>
        </li>
        <li className="mx-2 py-2" key="resume">
          <span onClick={() => setCurrentPage('resume')}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
