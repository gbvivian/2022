import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Project1Page from './components/project-pages/Project1Page';
import Project2Page from './components/project-pages/Project2Page';
import Navbar from './components/Navbar';

import HomePage from './components/HomePage';

function App() {
  const BrowserRouter = require('react-router-dom').BrowserRouter;
  const Route = require('react-router-dom').Route;
  const Link = require('react-router-dom').Link;

  const styles = {
    margins: {
      marginLeft: '20',
      marginRight: '20'
    }
  };

  return (
    <Router basename="/">
     <div id="app">
      <div className='mx-10 mt-20 md:mx-20 lg:mx-40'>
        <div className='flex'>
        <Navbar />
        </div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/proj1" component={Project1Page} />
        <Route exact path="/proj2" component={Project2Page} />

        <Route exact path="/about" component={() => <div>About</div>} />
      </div>
      </div>
    </Router>
  );
}

export default App;
