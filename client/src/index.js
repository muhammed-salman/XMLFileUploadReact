import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

import reducers from './reducers';
import App from './components/App';
import AppContainer from './components/AppContainer';
import Welcome from './components/Welcome';
import FileList from './containers/FileList';
import ReportTable from './containers/ReportTable';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  reducers,
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer>
        <Route path="/" exact component={Welcome} />
        <Route path="/fileupload" component={App} />
        <Route path="/uploadedfiles" component={FileList} />
        <Route path="/viewreport" component={ReportTable} />
      </AppContainer>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);

registerServiceWorker();
