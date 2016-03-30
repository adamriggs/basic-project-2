import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router';
import routes from './config/routes';

Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.getElementById('app'));
});
