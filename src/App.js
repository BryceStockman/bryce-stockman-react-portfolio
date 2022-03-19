import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';

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
    </div>
  );
}

export default App;
