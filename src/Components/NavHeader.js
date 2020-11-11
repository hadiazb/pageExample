import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = (props) => {
	const { logged } = props;
	return (
		<>
			{!logged ? (
				<nav className='header__nav'>
					<ul className='list'>
						<li className='list__item'>
							<NavLink to='/report' activeClassName='select'>
								<h4 className='list__item-text'>Report</h4>
							</NavLink>
						</li>
						<li className='list__item'>
							<NavLink to='/result' activeClassName='select'>
								<h4 className='list__item-text'>Result</h4>
							</NavLink>
						</li>
						<li className='list__item'>
							<NavLink to='/login' activeClassName='select'>
								<h4 className='list__item-text'>Login</h4>
							</NavLink>
						</li>
						<li className='list__item'>
							<NavLink to='/register' activeClassName='select'>
								<h4 className='list__item-text'>Register</h4>
							</NavLink>
						</li>
					</ul>
				</nav>
			) : (
				<nav className='header__nav'>
					<ul className='list'>
						<li className='list__item'>
							<NavLink to='/report' activeClassName='select'>
								<h4 className='list__item-text'>Report</h4>
							</NavLink>
						</li>
						<li className='list__item'>
							<NavLink to='/result' activeClassName='select'>
								<h4 className='list__item-text'>Result</h4>
							</NavLink>
						</li>
						<li className='list__item'>
							<NavLink to='/login' activeClassName='select'>
								<h4 className='list__item-text'>Logout</h4>
							</NavLink>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};

export default NavHeader;
