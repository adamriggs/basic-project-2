import React from 'react';

class Footer extends React.Component{

  constructor(props) {
    console.log('Footer.constructor()');
    super(props);

  }

  componentWillMount() {
    console.log('Footer.componentWillMount()');

  }

  componentDidMount() {
    console.log('Footer.componentDidMount()');

  }

  render(){
    console.log('Footer.render()');
    return (
      <nav className="navbar navbar-default" role="navigation" style={{marginBottom: 0}}>
  		  <div className="text-center text-primary">
  		    <h2>Thanks!</h2>
  		  </div>
      </nav>
    )
  }
};

export default Footer;