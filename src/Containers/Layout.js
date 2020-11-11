import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Containers/Layout.css';
import { connect } from 'react-redux';
import NavHeader from '../Components/NavHeader';

const Layout = (props) => {
	const { children, routesReducer } = props;
	console.log(routesReducer);
	return (
		<>
			<header className='header'>
				<Link to='/'>
					<img
						src='https://firebasestorage.googleapis.com/v0/b/gasprice-85c9b.appspot.com/o/Foundations%2FLogos%2Flogo.png?alt=media&token=2a6fd194-791f-44dc-9962-deaf5489fda0'
						alt='Logo de la app'
						className='header__img'
					/>
				</Link>
				<NavHeader logged={routesReducer.user} />
			</header>
			{children}
			<footer className='footer'>
				<ul className='footer__left'>
					<li className='footer__left-item'>
						<Link to='/'>
							<h6 className='option'>One</h6>{' '}
						</Link>
					</li>
					<li className='footer__left-item'>
						<Link to='/'>
							<h6 className='option'>Two</h6>{' '}
						</Link>
					</li>
				</ul>
				<ul className='footer__right'>
					<li className='footer__right-item'>
						<Link to='/'>
							<h6 className='option'>Three</h6>{' '}
						</Link>
					</li>
					<li className='footer__right-item'>
						<Link to='/'>
							<h6 className='option'>Four</h6>{' '}
						</Link>
					</li>
				</ul>
			</footer>
		</>
	);
};

const mapStateToProps = (reducers) => {
	const { routesReducer } = reducers;
	return { routesReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);
