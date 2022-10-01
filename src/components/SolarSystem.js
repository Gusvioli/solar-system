import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system-title" className="solar-system-title">
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="solar-system">
          { planets.map((planeta, index) => (<PlanetCard
            key={ planeta.name }
            planetImage={ planeta.image }
            planetName={ planeta.name }
            planetaKey={ index }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
