import React from "react";

const SearchForm = () => {
	return (
		<div className="ui segment center aligned">
			<h1>What's the weather like in...</h1>
			<div className="ui icon input" style={{ display: "inline" }}>
				<input type="text" placeholder="Search for a city..." />
				<i className="search icon"></i>
			</div>
			<h1 style={{ display: "inline", marginLeft: '12px' }}>?</h1>
		</div>
	);
};

export default SearchForm;
