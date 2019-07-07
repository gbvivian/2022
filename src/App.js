import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Swithc, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TestComp from './components/TestComp';
import Boof from './components/Boof';
import ProjectPage from './components/ProjectPage';

function Meow() {
	return (
		<React.Fragment>
			<h1>meow</h1>
		</React.Fragment>
	);
}

function nav() {
	return (
		<React.Fragment>
			<h2> navbar navbar navbar navbar</h2>
		</React.Fragment>
	);
}

function renderProjectCards() {
	return (
		<React.Fragment>
			<Grid container spacing={24} justify="center" alignItems="center">
				<React.Fragment>
					<AppBar position="static" color="default">
						<Toolbar>
							<IconButton color="inherit" aria-label="Menu">
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" color="inherit">
								VL
							</Typography>
							{/* <Button color="inherit">Login</Button> */}
						</Toolbar>
					</AppBar>
				</React.Fragment>

				<Grid item xs={6}>
					<Card>
						<CardActionArea>
							<CardMedia
								image="/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species,
									ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item xs={6}>
					<Card>
						<CardActionArea>
							<CardMedia
								image="/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species,
									ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Link to="/home">Boof</Link>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

function App() {
	// const styles = {
	// 	menuButton: {
	// 		marginLeft: -12,
	// 		marginRight: 20
	// 	}
	// };

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
		<Router>
			<div className="App">{/* <header className="App-header" /> */}</div>
			<Route exact path="/" component={renderProjectCards} />
			<Route exact path="/home" component={Boof} />
		</Router>
	);
}

export default App;
