import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const proxyquire = require('proxyquire').noCallThru();

const WidgetPreview = proxyquire('./widgetPreview', {}).default;

describe('Widget Preview', () => {
  const store = createStore(reducer);
  const props = {
    title: 'test',
    unit: 'imperial',
    wind: 'off',
    created: true
  };
  const wrapperForm = mount(<Provider store={store}><WidgetPreview {...props} /></Provider>);
  it('should render preview', () => {
    expect(wrapperForm.find('.widget').length).to.equal(1);
  });
});
