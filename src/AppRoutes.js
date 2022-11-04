import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Game, Layout } from './views';

export const history = createBrowserHistory()
  let currentRoute = history.location
  history.listen((nextRoute) => {
    if (
      currentRoute.pathname === nextRoute.pathname &&
      currentRoute.search === nextRoute.search &&
      currentRoute.hash === nextRoute.hash) return
    currentRoute = nextRoute
  });

const AppRoutes = props => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/about" element={<Layout component={About} />} />
        <Route path="/game/:id" element={<Layout component={Game}/>} />
        <Route path="/" element={<Layout component={Home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;