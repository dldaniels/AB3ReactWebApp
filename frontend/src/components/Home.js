import React from 'react'
import { Container } from 'react-bootstrap'
import dinosaurs from '../images/dinotoys.jpeg'

const Home = () => {
    return (
      <>
       <main className='py-3'>
        <Container>
        <h1>Dinosaur Toybox</h1>
        </Container>
        <div>
        <img src={dinosaurs} alt="Dinosaur toys" style={{height:400,width:650}} />
        </div>
      </main> 
      </>
    )
  }

  export default Home