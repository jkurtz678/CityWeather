import React from "react";

class SearchForm extends React.Component{
	state = { search_term: "" };

	onEnterPressed = event => {
		event.preventDefault();
		this.props.onSearchSubmit(this.state.search_term);
	};

	render() {
	return (
		<div className="ui segment center aligned">
			<form className="ui" onSubmit={this.onEnterPressed}>
				<h1>What's the weather like in...</h1>
				<div className="ui icon input" style={{ display: "inline" }}>
					<input
						type="text"
						placeholder="Search for a city..."
						value={this.state.term}
						onChange={e => this.setState({search_term: e.target.value})}
					/>
					<i className="search icon"></i>
				</div>
				<h1 style={{ display: "inline", marginLeft: "12px" }}>?</h1>
			</form>
		</div>
	);
}
}

export default SearchForm;
