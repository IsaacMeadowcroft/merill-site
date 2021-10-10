import React from 'react';
import {Home, Prints, Portfolio, About, Contact} from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={client}>
      <Home />
      <Prints />
      { /*}
      <Portfolio />
      <About />
      <Contact /> */}
    </QueryClientProvider>
  )
}

export default App;
