import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import Sculpture from './components/sculpture/Sculpture';
import Collection from './components/collection/Collection';
import SculptureContextProvider from './context/SculptureContext';
/* import SearchFilterSort from './UI/SearchFilterSort/SearchFilterSort' */
import './App.css';

/* function saveToLocalStorage(selectedSculptures) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedSculptures));
 } */

function App() {

	return (
		<div className="app">
			<SculptureContextProvider>
				<Router>
					<Navbar />
					{/* <SearchFilterSort/> */}
					<Switch>
						<Route path="/" exact component={Sculpture} />
						<Route path="/collection" exact component={Collection} />
					</Switch>
				</Router>
			</SculptureContextProvider>
		</div>
	);
}

export default App;
