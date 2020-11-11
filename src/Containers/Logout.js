import React from 'react';
import '../Styles/Containers/Logout.css';
import { Link } from 'react-router-dom';

const Logout = () => {
	const handleLogout = (event) => {
		event.preventDefault();
	};
	return (
		<div className='logout'>
			<div className='logout__container'>
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

export default Logout;
