import React from 'react';

function Resume() {
  return (
    <section className="container">
      <h1 id="resume" className="my-2">
        Resume
      </h1>
      <div className="experience">
        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="experience">
        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>REST</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
