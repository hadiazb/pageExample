import React from 'react';
import '../Styles/Containers/Home.css';
import { connect } from 'react-redux';

const Home = (props) => {
	console.log(props.sesionReducer);
	return (
		<section className='home'>
			<h1>This is the Home</h1>
		</section>
	);
};

const mapStateToProps = (reducers) => {
	const { sesionReducer } = reducers;
	return { sesionReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
