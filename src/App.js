import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

App.propTypes = {
  Header: PropTypes.string,
  SolarSystem: PropTypes.string,
  Missions: PropTypes.string,
}.isRequired;

export default App;
