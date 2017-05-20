import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import widgetTemplate from '../constants/widgetTemplate';
import { fetchWeatherDetails } from '../actions/userActions';

export class widgetPreview extends Component {
  static propTypes = {
  };
  componentDidMount() {
  }
  render() {
    return (
      <div id="widgetPreview" >
        {widgetTemplate}
      </div>
    );
  }
}
export default connect(null, { dispatchWeatherDetails: fetchWeatherDetails })(widgetPreview);

