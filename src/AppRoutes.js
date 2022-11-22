import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appTheme, guestTheme } from './themes/theme';
import {
  Layout,
  About,
  Error,
  GameDetail,
  GameList,
  GameSelector,
  GroupDetail,
  GroupEdit,
  GroupList,
  GroupNew,
  Home,
  Login,
  MemberDetail,
  Profile,
  Register,
  Search
} from './views';

export const history = createBrowserHistory()
  let currentRoute = history.location
  history.listen((nextRoute) => {
  if (
      currentRoute.pathname === nextRoute.pathname &&
      currentRoute.search === nextRoute.search &&
      currentRoute.hash === nextRoute.hash
    ) {
      return currentRoute = nextRoute;
    }
  });

const AppRoutes = () => (
  <BrowserRouter history={history}>
    <Routes>
      <Route path="/about" element={<Layout theme={appTheme} component={About} />} />
      <Route path="/collection" element={<Layout theme={appTheme} component={GameList}/>} />
      <Route path="/collection/:id" element={<Layout theme={appTheme} component={GameList}/>} />
      <Route path="/boardgame/:id" element={<Layout theme={appTheme} component={GameDetail}/>} />
      <Route path="/group/:id" element={<Layout theme={appTheme} component={GroupDetail}/>} />
      <Route path="/group/:id/edit" element={<Layout theme={appTheme} component={GroupEdit}/>} />
      <Route path="/groups" element={<Layout theme={appTheme} component={GroupList}/>} />
      <Route path="/group/new" element={<Layout theme={appTheme} component={GroupNew}/>} />
      <Route path="/login" element={<Layout theme={guestTheme} component={Login}/>} />
      <Route path="/member/:id" element={<Layout theme={appTheme} component={MemberDetail}/>} />
      <Route path="/profile" element={<Layout theme={appTheme} component={Profile}/>} />
      <Route path="/register" element={<Layout theme={guestTheme} component={Register}/>} />
      <Route path="/search" element={<Layout theme={appTheme} component={Search} />} />
      <Route path="/selector" element={<Layout theme={appTheme} component={GameSelector} />} />
      <Route path="/" element={<Layout theme={appTheme} component={Home} />} />
      <Route path="*" element={<Layout theme={appTheme} component={Error} />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;