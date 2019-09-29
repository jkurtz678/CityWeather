import React from "react";
import SearchForm from './SearchForm';

class App extends React.Component {
	render() {
		return (
			<div className="ui container" style={{ marginTop: "50px" }}>
				<SearchForm />
			</div>
		);
	}
}

export default App;
