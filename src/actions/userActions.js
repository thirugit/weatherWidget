import * as types from '../constants/actionsConstants';
import axios from 'axios';
export function widgetEditorFieldChange(fieldName, value) {
  return dispatch => {
    dispatch({
      value,
      fieldName,
      type: types.FIELD_CHANGE
    });
  };
}
// export function fetchWeatherDetails(lat, lon, units){
//   return dispatch => {
//     axios({
//     url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&APPID=da6fa1f2e8ba83123a10526612467714&units='+units,
//     method: 'get',
//     headers: {  
//       'Content-Type': 'application/json; charset=utf-8'
//     }
//   }).
//     then(function (result) {
//       dispatch({
//         type: types.WEATHER_DETAILS,
//         data: result.data
//       });
//     });

//   };
// }