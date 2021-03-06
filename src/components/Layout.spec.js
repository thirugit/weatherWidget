import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const proxyquire = require('proxyquire').noCallThru();

const Layout = proxyquire('./Layout', {}).default;

describe('Layout', () => {
  const store = createStore(reducer);
  const props = {
    title: 'test',
    unit: 'imperial',
    wind: 'off',
    created: true
  };
  const wrapperForm = mount(<Provider store={store}><Layout {...props} /></Provider>);
  it('should render layout', () => {
    expect(wrapperForm.find('.widget-editor-text').length).to.equal(3);
  });
});
