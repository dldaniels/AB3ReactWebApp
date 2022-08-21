import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header />
    <main className='py-3'>
      <Container>
      <h1>Dinosaur Toybox</h1>
      </Container>
      <Footer />
    </main> 
     
    </>
  );
}

export default App;
