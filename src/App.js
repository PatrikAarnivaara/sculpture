import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import getGoogle from './api/getGoogle';
import './App.css';
import Navbar from './UI/Navbar';
import Sculpture from './components/sculpture/Sculpture';
import Collection from './components/collection/Collection';

function App() {
	
	useEffect(() => {
		const getTestData = async () => {
			try {
				const response = await getGoogle();
				console.log(response)
			} catch (error) {
				console.log(error);
			}
		};
		getTestData();
	}, []);

	return (
		<div className="app">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Sculpture} />
					<Route path="/collection" exact component={Collection} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
