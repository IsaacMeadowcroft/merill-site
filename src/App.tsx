import React from 'react';
import {Home, Prints, Portfolio, About, Contact} from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css'

function App(): JSX.Element {
  return (
    <>
      <Home />
      <Prints />
      { /*}
      <Portfolio />
      <About />
      <Contact /> */}
    </>
  )
}

export default App;
