import React from 'react';
import runBuddy from '../../assets/images/run-buddy-website.jpg';
import gitHubLink from '../../assets/images/github-link.png';

function Projects() {
  return (
    <section>
      <div id="example1">
        <img src={runBuddy} />
        <div className="hide">
          <h2>Title</h2>
          <span>
            <img src={gitHubLink} />
          </span>
          <h3>Project Type</h3>
        </div>
      </div>
      <div id="example2">
        <img src={runBuddy} />
        {/* Use CSS for the hover effect */}
        <div className="hide">
          <h2>Title</h2>
          <span>
            <img src={gitHubLink} />
          </span>
          <h3>Project Type</h3>
        </div>
      </div>
    </section>
  );
}

export default Projects;
