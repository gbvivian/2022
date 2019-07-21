import React from 'react';
import MyLogo from './MyLogo';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<React.Fragment>
			<nav className="flex items-center justify-between flex-wrap p-6 text-gray-900">
				<div className="flex items-center flex-shrink-0 mr-6">
					<Link to="/">
						<span className="font-semibold text-2xl tracking-tight">Vivian Lam</span>
					</Link>
				</div>
				<div className="block lg:hidden">
					<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>

				<div className="w-full block flex-grow lg:flex lg:flex-row-reverse lg:items-center lg:w-auto">
					<a href="/Resume-Vivian-Lam.pdf" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500">
						Resume
					</a>
					<Link to="/about" className="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-gray-500">
						About
					</Link>
				</div>
			</nav>
		</React.Fragment>
	);
}
