import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Posts from './components/Posts/Posts';
import FullStory from './components/FullStory/FullStory';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/posts/:postId">
          <FullStory />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
