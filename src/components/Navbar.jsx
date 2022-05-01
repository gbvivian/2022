import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<React.Fragment>
			<nav className='w-full flex justify-between'>
				{/* <div className="flex items-center flex-shrink-0 mr-6"> */}
					<Link to="/">
						<span className="font-semibold text-2xl">Vivian Lam</span>
					</Link>
				{/* </div> */}

				<div>


<div style={{paddingTop: "6px"}}>
<div className="inline mr-4">
					{/* <Link to="/about" className="block row-reverse lg:inline-block lg:mt-0 hover:text-gray-500">
						About
					</Link> */}
					</div>

					<a href="/portfolio-2019/Resume-Vivian-Lam.pdf"
						className="block lg:inline-block lg:mt-0 hover:text-gray-500">
						Resume
					</a>
					</div>
				</div>
					
			</nav>
		</React.Fragment>
	);
}
