import React from 'react';
import '../Styles/Containers/Logout.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	getSesion,
	leaveSesion,
} from '../actions/sesionAction';

const Logout = (props) => {
	const { leaveSesion } = props;
	const handleLogout = (event) => {
		event.preventDefault();
		leaveSesion();
		localStorage.clear();
	};

	return (
		<div className='logout'>
			<div className='logout__container'>
				<div className='audio'></div>
				<div className='camera'></div>
				<div className='bottom'></div>
				<div className='mark'>
					<h2 className='logout__container-title'>Logout</h2>
					<form
						className='logout__container-form'
						onSubmit={handleLogout}
					>
						<h5 className='title'>
							Estas seguro de salir?, aun puedes seguir mirando
							temas como...
						</h5>
						<ul className='list'>
							<li className='list__item'>
								<Link to='/'>1</Link>
							</li>
							<li className='list__item'>
								<Link to='/'>2</Link>
							</li>
							<li className='list__item'>
								<Link to='/'>3</Link>
							</li>
							<li className='list__item'>
								<Link to='/'>4</Link>
							</li>
							<li className='list__item'>
								<Link to='/'>5</Link>
							</li>
							<li className='list__item'>
								<Link to='/'>6</Link>
							</li>
						</ul>
						<h5 className='title'>
							Si realmente estas seguro de salir pica acá...
						</h5>
						<input type='submit' value='Exit' className='exit' />
					</form>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { sesionReducer } = reducers;
	return { sesionReducer };
};

const mapDispatchToProps = { getSesion, leaveSesion };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Logout);
