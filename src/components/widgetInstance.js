// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { fetchWeatherDetails } from '../actions/userActions';

// export class WidgetInstance extends Component {
//   static propTypes = {
//     dispatchWeatherDetails: PropTypes.func,
//     wind: PropTypes.string,
//     title: PropTypes.string,
//     unit: PropTypes.string
//   };
//   componentDidMount() {
//     if (navigator.geolocation) {
//       var self = this;
//       navigator.geolocation.getCurrentPosition(function(position) {
//         console.log(position)
//         var lat = position.coords.latitude;
//         var long = position.coords.longitude;
//         self.props.dispatchWeatherDetails(lat,long, self.props.unit);
//       });
//     }
//   }
//   render() {
//     return (
//       <div className="half-width">
//         <div className="content widget">
//           <h1>{this.props.title}</h1>
//           <img alt="weather icon" className="inline-block" src={'http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/'+this.props.icon+'.png'} />
//           <div className="details inline-block">
//             <div className="city">Sydney</div>
//             {this.props.unit === 'metric' ? <div className="temperature">{this.props.temperature}°C</div> : <div>{this.props.temperature*1.8+32}°F</div>}
//             {this.props.wind === 'on' ? <div className="wind">Wind <span>{this.props.windDirectio} {this.props.windSpeed}km/h</span></div> : null}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default connect(null, { dispatchWeatherDetails: fetchWeatherDetails })(WidgetInstance);

