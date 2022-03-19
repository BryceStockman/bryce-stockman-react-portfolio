import React from 'react';
import About from '../About';
import ContactForm from '../Contact';
import Project from '../Project';

function Page(props) {
  const {
    currentPage
  } = props;
  // useEffect isn't getting hit
  // useEffect(() => {
  //   setCurrentPage(document.title);
  // }, [currentPage]);

  const switchPage = () => {
    console.log(currentPage);
    // if (document.title === 'about') {
    //   return <About />;
    // } else if (document.title === 'contact') {
    //   return <ContactForm />;
    // } else if (document.title === 'project') {
    //   return <Project />;
    // } else {
    //   return <About />;
    // }
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <ContactForm />;
      case 'project':
        return <Project />;
      // case 'resume':
      // return <Resume />
      default:
        return <ContactForm />;
    }
  };

  return <section>{switchPage()}</section>;
}

export default Page;
