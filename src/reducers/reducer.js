import { FIELD_CHANGE, CREATE_WIDGET } from '../constants/actionsConstants';

export const initialState = {
  title: '',
  unit: 'metric',
  wind: 'on',
  created: true
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case FIELD_CHANGE: {
      return { ...state,
        [action.fieldName]: action.value
      };
    }
    case CREATE_WIDGET: {
      return { ...state,
        created: !state.created
      };
    }
    default: {
      return state;
    }
  }
}
