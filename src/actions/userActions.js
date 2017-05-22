import * as types from '../constants/actionsConstants';

export function widgetEditorFieldChange(fieldName, value) {
  return (dispatch) => {
    dispatch({
      value,
      fieldName,
      type: types.FIELD_CHANGE
    });
  };
}
export function createNewWidget() {
  return (dispatch) => {
    dispatch({
      type: types.CREATE_WIDGET
    });
  };
}
