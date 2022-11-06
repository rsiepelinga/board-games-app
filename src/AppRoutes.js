import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
  Layout,
  About,
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

const AppRoutes = props => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/about" element={<Layout component={About} />} />
        <Route path="/collection" element={<Layout component={GameList}/>} />
        <Route path="/game/:id" element={<Layout component={GameDetail}/>} />
        <Route path="/games" element={<Layout component={GameList}/>} />
        <Route path="/group/:id" element={<Layout component={GroupDetail}/>} />
        <Route path="/group/:id/edit" element={<Layout component={GroupEdit}/>} />
        <Route path="/groups" element={<Layout component={GroupList}/>} />
        <Route path="/group/new" element={<Layout component={GroupNew}/>} />
        <Route path="/login" element={<Layout component={Login}/>} />
        <Route path="/member/:id" element={<Layout component={MemberDetail}/>} />
        <Route path="/profile" element={<Layout component={Profile}/>} />
        <Route path="/register" element={<Layout component={Register}/>} />
        <Route path="/search" element={<Layout component={Search}/>} />
        <Route path="/selector" element={<Layout component={GameSelector}/>} />
        <Route path="/" element={<Layout component={Home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;