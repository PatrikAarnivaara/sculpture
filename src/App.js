import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './UI/Navbar/Navbar';
import Sculpture from './components/sculpture/Sculpture';
import Collection from './components/collection/Collection';

/* function saveToLocalStorage(selectedSculptures) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedSculptures));
 } */

function App() {
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
