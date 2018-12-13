import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/App';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders App component', () => {
    expect(component).to.exist;
  });
});
