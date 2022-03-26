import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('/');
  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  return (
    <div>
      <Header>
        <Nav setCurrentPage={setCurrentPage}></Nav>
      </Header>

      <Page currentPage={currentPage}></Page>
      <Footer></Footer>
    </div>
  );
}

export default App;
