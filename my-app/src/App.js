import React from 'react';
// import logo from './logo.svg';
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

function App() {
	// const styles = {
	// 	menuButton: {
	// 		marginLeft: -12,
	// 		marginRight: 20
	// 	}
	// };

	return (
		<div className="App">
			{/* <header className="App-header" /> */}
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
								Share
							</Button>
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
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
