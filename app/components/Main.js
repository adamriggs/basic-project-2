import React from 'react';
import { RouteHandler } from 'react-router';
import theme from '../styles/index.less';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Main extends React.Component{

  constructor(props) {
    console.log('Main.constructor()');
    super(props);

  }

  componentWillMount() {
    console.log('Main.componentWillMount()');

  }

  componentDidMount() {
    console.log('Main.componentDidMount()');

  }

  render(){
    console.log('Main.render()');
    return (
      <div className="main-container">
        <Header />
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
        <Footer />
      </div>
    )
  }
};

export default Main;
