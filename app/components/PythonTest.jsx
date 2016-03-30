import React from 'react';
import PythonShell from 'python-shell';

class PythonTest extends React.Component {

	constructor(props) {
		console.log('PythonTest.constructor()');
		super(props);

	}

	componentWillMount() {
		console.log('PythonTest.componentWillMount()');

		//this.pyshell = new PythonShell('test.py');
 
		// // sends a message to the Python script via stdin 
		// this.pyshell.send('hello');
		 
		// this.pyshell.on('message', function (message) {
		//   // received a message sent from the Python script (a simple "print" statement) 
		//   console.log(message);
		// });
		 
		// // end the input stream and allow the process to exit 
		// this.pyshell.end(function (err) {
		//   if (err) throw err;
		//   console.log('finished');
		// });

	}

	componentDidMount() {
		console.log('PythonTest.componentDidMount()');

	}

	render() {
		console.log('PythonTest.render()');


		return (

			<div>
				<span>Python Test</span>
			</div>

		);
	}

}

export default PythonTest;