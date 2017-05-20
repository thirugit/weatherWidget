import { FIELD_CHANGE } from '../constants/actionsConstants';

export const initialState = {
  title: '',
  unit: 'metric',
  wind: 'on',
  windSpeed: '',
  temperature: '',
  icon: '',
  windDirection: ''
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case FIELD_CHANGE: {
      return { ...state,
        [action.fieldName]: action.value
      };
    }
    // case WEATHER_DETAILS: {
    //   return { ...state,
    //     temperature: action.data.main.temp,
    //     windSpeed: Math.round(action.data.wind.speed*3.6),
    //     icon: action.data.weather[0].icon,
    //     windDirection: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][Math.round(action.data.wind.deg/45)]
    //   };
    // }
    default: {
      return state;
    }
  }
}
