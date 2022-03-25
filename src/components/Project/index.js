import React from 'react';
import runBuddy from '../../assets/images/run-buddy-website.jpg';
import gitHubLink from '../../assets/images/github-link.png';

function Projects() {
  return (
    <section id="project-section" className="container flex-row row">
      {/* Project Example 1 */}
      <div id="example1" className="my-2 img-container col-lg">
        <img src={runBuddy} className="project-img" alt="first project" />
        <div className="project-details">
          <h2>Title</h2>
          <div>
            <img
              src={gitHubLink}
              alt="github repo link"
              width="50"
              height="50"
            />
          </div>
          <h3>Project Type</h3>
        </div>
      </div>

      {/* Project Example 2 */}
      <div id="example2" className="my-2 img-container col-lg">
        <img src={runBuddy} className="project-img" alt="second project" />
        {/* Use CSS for the hover effect */}
        <div className="project-details">
          <h2>Title</h2>
          <span>
            <img
              src={gitHubLink}
              alt="github repo link"
              width="50"
              height="50"
            />
          </span>
          <h3>Project Type</h3>
        </div>
      </div>

      {/* Project Example 3 */}
      <div id="example3" className="my-2 img-container col-lg">
        <img src={runBuddy} className="project-img" alt="third project" />
        {/* Use CSS for the hover effect */}
        <div className="project-details">
          <h2>Title</h2>
          <span>
            <img
              src={gitHubLink}
              alt="github repo link"
              width="50"
              height="50"
            />
          </span>
          <h3>Project Type</h3>
        </div>
      </div>

      {/* Project Example 4 */}
      <div id="example4" className="my-2 img-container col-lg">
        <img src={runBuddy} className="project-img" alt="fourth project" />
        {/* Use CSS for the hover effect */}
        <div className="project-details">
          <h2>Title</h2>
          <span>
            <img
              src={gitHubLink}
              alt="github repo link"
              width="50"
              height="50"
            />
          </span>
          <h3>Project Type</h3>
        </div>
      </div>
    </section>
  );
}

export default Projects;
