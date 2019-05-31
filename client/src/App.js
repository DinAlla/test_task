import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/styles/App.css';

const App = () => (
  <div>
      <BrowserRouter>
          <Switch>
              <Route exact
                     path="/"
                     component={MainPageView}
              />
              <Route path="/login"
                     component={MainPageView}
              />
              <Route path="/news"
                     component={MainPageView}
              />
              <Route path="/profile"
                     component={MainPageView}
              />
          </Switch>
      </BrowserRouter>
  </div>
);

export default App;
