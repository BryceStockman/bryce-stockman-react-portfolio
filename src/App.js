import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
