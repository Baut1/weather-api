import './App.css';
// import React from 'react';
import Header from './components/Header/Header';
import Ciudades from './components/Ciudades/Ciudades';
import Form from './components/Form/Form';
import Instrucciones from './components/Instrucciones/Instrucciones';
import Loader from './components/Loader/Loader';
import Info from './components/Info/Info';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';

import useForecast from './hooks/useForecast';

function App() {

  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = value => {
    submitRequest(value);
  }

  return (
    <div className="App">
      <Header />
        <Ciudades />
        {forecast ?
          <Info forecast={forecast} />
          :
          <div>
            {!isLoading && <Form submitSearch={onSubmit} />}
            {isLoading && <Loader />}
            {isError && <Error message={isError} />}
          </div>
        }
        <Instrucciones />
      <Footer />
    </div>
  );
}

export default App;
