import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <li className="li__mission">
          <div data-testid="mission-name">{ name }</div>
          <div data-testid="mission-year">{ year }</div>
          <div data-testid="mission-country">{ country }</div>
          <div data-testid="mission-destination">{ destination }</div>
        </li>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
