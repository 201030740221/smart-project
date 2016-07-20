'use strict';

import React from 'react';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


import Main from './views/main';
import Home from './views/home';
import SwipePage from './views/swipePage';
import UpPushFresh from './views/upPushFresh';

var routes = (
  <Router history={appHistory}>
      <Route component={Main} path="/" >
          <IndexRoute component={Home}/>
          <Route component={SwipePage} path='swipe_page' />
          <Route component={UpPushFresh} path='upPushfresh_page' />
      </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app-root'));
