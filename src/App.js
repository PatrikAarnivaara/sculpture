
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './UI/Navbar';
import Sculpture from './components/sculpture/Sculpture';
import Collection from './components/collection/Collection';

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
