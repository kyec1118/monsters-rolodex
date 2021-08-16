import { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			search: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ search: e.target.value });
	};
	render() {
		const { monsters, search } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(search.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder="Search Monsters"
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
