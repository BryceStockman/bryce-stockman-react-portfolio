import React from 'react';
import About from '../About';
import ContactForm from '../Contact';
import Project from '../Project';
import Resume from '../Resume';

function Page(props) {
  const { currentPage } = props;

  const switchPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <ContactForm />;
      case 'project':
        return <Project />;
      case 'resume':
        return <Resume />;
      default:
        return <ContactForm />;
    }
  };

  return <main>{switchPage()}</main>;
}

export default Page;
