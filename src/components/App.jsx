import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Schedule from '../queries/Schedule';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Schedule} />
    </Router>
  );
}
