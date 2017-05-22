import { CREATE_WIDGET, FIELD_CHANGE } from '../constants/actionsConstants';

const proxyquire = require('proxyquire').noCallThru();

const sandbox = sinon.sandbox.create();
const {
  widgetEditorFieldChange, createNewWidget } = proxyquire('./userActions', {});
const dispatchSpy = sandbox.spy();

describe('user actions', () => {
  it('should dispatch FIELD_CHANGE action', () => {
    widgetEditorFieldChange('title', 'test123')(dispatchSpy);
    expect(dispatchSpy).to.have.been.calledWith({ type: FIELD_CHANGE,
      fieldName: 'title',
      value: 'test123' });
  });
  it('should call createNewWidget action', () => {
    createNewWidget()(dispatchSpy);
    expect(dispatchSpy).to.have.been.calledWith({ type: CREATE_WIDGET });
  });
});

