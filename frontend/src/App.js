import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import dinosaurs from './images/dinotoys.jpeg'

const App = () => {
  return (
    <>
    <Header />
    
    <main className='py-3'>
      
      <Container>
      <h1>Dinosaur Toybox</h1>
      </Container>
      <div>
      <img src={dinosaurs} alt="Dinosaur toys" style={{height:400,width:650}} />
      </div>
      
      <Footer />
  
    </main> 
     
    </>
  );
}

export default App;
