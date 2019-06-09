import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainPageView from './views/MainPageView';

import './assets/styles/App.css';
import MainHeader from './components/MainHeader';

const App = () => (
  <div>
      <BrowserRouter>
          <MainHeader />
          <Switch>
              <Route exact
                     path="/"
                     component={MainPageView}
              />
              <Route path="/login"
                     component={MainPageView}
              />
              {/* <Route path="/news"
                     component={MainPageView}
              />
              <Route path="/profile"
                     component={MainPageView}
              /> */}
          </Switch>
      </BrowserRouter>
  </div>
);

export default App;
