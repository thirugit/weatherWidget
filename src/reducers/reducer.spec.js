import { FIELD_CHANGE, CREATE_WIDGET } from '../constants/actionsConstants';
import reducer, { initialState } from './reducer';

const actionPayload = {
  fieldName: 'wind',
  value: 'off'
};

describe('reducer', () => {
  it('should handle FIELD_CHANGE', () => {
    const state = reducer(initialState, {
      type: FIELD_CHANGE,
      ...actionPayload
    });
    const expectedState = {
      ...initialState,
      wind: 'off'
    };
    expect(state).to.deep.equal(expectedState);
  });
  it('should handle CREATE_WIDGET', () => {
    const state = reducer(initialState, {
      type: CREATE_WIDGET
    });
    const expectedState = {
      ...initialState,
      created: false

    };
    expect(state).to.deep.equal(expectedState);
  });
});
