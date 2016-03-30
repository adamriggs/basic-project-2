import React from 'react';
import Flickr from './Flickr.jsx';
//import PythonTest from './PythonTest.jsx';

class Home extends React.Component{

	constructor(props) {
		console.log('Home.constructor()');
		super(props);

	}

	componentWillMount() {
		console.log('Home.componentWillMount()');

	}

	componentDidMount() {
		console.log('Home.componentDidMount()');

	}


	render(){
		console.log('Home.render()');
		return (
			<div>
		    	<Flickr />
		    </div>
		)
	}
};

export default Home;
