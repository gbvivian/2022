import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/core/MenuItem';
import MyLogo from './MyLogo';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Navbar() {
	return (
		<React.Fragment>
			<AppBar position="static" color="default">
				<Toolbar>
					<IconButton color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<Link to="/">VL</Link>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
