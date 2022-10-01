import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetaKey } = this.props;
    return (
      <div data-testid="planet-card">
        <li data-testid="planet-name" className="li-alinhamento">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ `rotate${planetaKey}` }
          />
          <p>{ planetName }</p>
        </li>
      </div>);
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
  planetaKey: PropTypes.number,
}.isRequired;

export default PlanetCard;
