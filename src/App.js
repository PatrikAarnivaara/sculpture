import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './UI/Navbar/Navbar';
import Searchbar from './UI/Searchbar/Searchbar';
import Sculpture from './components/sculpture/Sculpture';
import Collection from './components/collection/Collection';

function App() {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<Searchbar/>
				<Switch>
					<Route path="/" exact component={Sculpture} />
					<Route path="/collection" exact component={Collection} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
