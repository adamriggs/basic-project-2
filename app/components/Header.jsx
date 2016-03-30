import React from 'react';

class Header extends React.Component{

  constructor(props) {
    console.log('Header.constructor()');
    super(props);

  }

  componentWillMount() {
    console.log('Header.componentWillMount()');

  }

  componentDidMount() {
    console.log('Header.componentDidMount()');

  }

  render(){
    console.log('Header.render()');
    return (
		<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
		  <div className="text-center text-primary">
		    <h2>The Most Interesting Photos on Flickr</h2>
		  </div>
		</nav>
    )
  }
};

export default Header;