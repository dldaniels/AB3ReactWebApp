import React from 'react';
import { Container } from 'react-bootstrap';
import Table from './Table'

const ToyBox = () => {
  return (
    <div>
       <main className='py-3'>
        <Container>
        <h1>Dinosaur Toybox</h1>
        </Container>
        <div>
        <h1>Available Dinosaurs</h1>
        </div>
        <div><Table /></div>
      </main> 
    </div>
  )
}

export default ToyBox
