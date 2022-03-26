import React from 'react';
import githubIcon from '../../assets/images/github-link.png';
import linkedInIcon from '../../assets/images/linkedin-link.png';
import stackoverFlowIcon from '../../assets/images/stackover-link.png';

function Footer() {
  return (
    <section id="footer" className="container p-2">
      <a href="https://github.com/BryceStockman/">
        <img src={githubIcon} alt="profile icon" className="my-2 p-2" />
      </a>
      <a href="https://www.linkedin.com/in/bryce-stockman/">
        <img src={linkedInIcon} alt="profile icon" className="my-2 p-2" />
      </a>
      <a href="https://stackoverflow.com/">
        <img src={stackoverFlowIcon} alt="profile icon" className="my-2 p-2" />
      </a>
    </section>
  );
}

export default Footer;
