import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
import Landing from '../components/Landing'



class Routes extends Component {
	
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Landing}>
				</Route>
			</Router>
		)
	}
}

export default Routes;

/*


<IndexRoute component={Home}></IndexRoute>


*/