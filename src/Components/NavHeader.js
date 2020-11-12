import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = (props) => {
	const { logged, authorized } = props;

	const content = (logged, authorized) => {
		if (logged === true && authorized === true) {
			return (
				<nav className='header__nav'>
					<ul className='list'>
						<li className='list__item'>
							<NavLink to='/home' activeClassName='select'>
								<h4 className='list__item-text'>Home</h4>
							</NavLink>
						</li>
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
							<NavLink to='/profile' activeClassName='select'>
								<h4 className='list__item-text'>Profile</h4>
							</NavLink>
						</li>
						<li className='list__item'>
							<NavLink to='/logout' activeClassName='select'>
								<h4 className='list__item-text'>Logout</h4>
							</NavLink>
						</li>
					</ul>
				</nav>
			);
		}

		if (logged === true && authorized === false) {
			return (
				<nav className='header__nav'>
					<ul className='list'>
						<li className='list__item'>
							<NavLink to='/home' activeClassName='select'>
								<h4 className='list__item-text'>Home</h4>
							</NavLink>
						</li>
						<li className='list__item'>
							<NavLink to='/logout' activeClassName='select'>
								<h4 className='list__item-text'>Logout</h4>
							</NavLink>
						</li>
					</ul>
				</nav>
			);
		}

		if (
			(logged === false && authorized === true) ||
			(logged === false && authorized === false)
		) {
			return (
				<nav className='header__nav'>
					<ul className='list'>
						<li className='list__item'>
							<NavLink to='/home' activeClassName='select'>
								<h4 className='list__item-text'>Home</h4>
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
			);
		}
	};

	return <>{content(logged, authorized)}</>;
};

export default NavHeader;
