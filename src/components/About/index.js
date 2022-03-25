import React from 'react';
import profileIcon from '../../assets/images/profile-icon-large.png';

function About() {
  return (
    <section className="container">
      <h1 id="about" className="my-2">
        About Me
      </h1>
      <img src={profileIcon} alt="profile icon" className="my-2" />
      <p className="my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed
        sed risus. Integer enim neque volutpat ac tincidunt. Vel quam elementum
        pulvinar etiam non quam lacus. Ultrices in iaculis nunc sed augue lacus
        viverra vitae congue. Ipsum dolor sit amet consectetur adipiscing. Ac
        tortor vitae purus faucibus ornare suspendisse. Eu non diam phasellus
        vestibulum lorem sed. Egestas sed sed risus pretium quam vulputate
        dignissim. Pulvinar etiam non quam lacus suspendisse faucibus interdum
        posuere. Libero nunc consequat interdum varius sit amet mattis
        vulputate. Nibh nisl condimentum id venenatis a. Lectus nulla at
        volutpat diam ut venenatis. Sodales neque sodales ut etiam sit amet. Sit
        amet est placerat in egestas. Dictum fusce ut placerat orci nulla
        pellentesque. Luctus accumsan tortor posuere ac ut consequat. Magnis dis
        parturient montes nascetur ridiculus mus mauris.
      </p>
    </section>
  );
}

export default About;
