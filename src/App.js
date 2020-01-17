import React from 'react';
import './App.css';
import { connect } from "react-redux";
import {getUserGithubData, setUserValue, setShowSearch} from "./store/actions.js";
import SearchParams from "./components/SearchParams.js";
import Results from "./components/Results.js"

const App = ({getUserGithubData, setUserValue, userValue, recentRepos, searchError, setShowSearch, showSearch}) => {
	const handleChange = e => {
		e.preventDefault();
		e.stopPropagation();
		setUserValue(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		getUserGithubData(userValue)
	}
	const handleReturn = (e) => {
		e.preventDefault();
		setShowSearch(true)
	}
  	return (
		<div className="App">
			{showSearch ? 
				<SearchParams 
				handleSubmit={handleSubmit} 
				handleChange={handleChange} 
				/>
			: recentRepos ? 
				<>
					<Results recentRepos={recentRepos} userValue={userValue} /> 
					<button onClick={handleReturn}>Back</button>	
				</>
			: <p>...Loading</p>	
			}
			{searchError ? <p>Username Not Found. Try Again</p> : null }
		</div>
  	)
}

const mapStateToProps = state => ({
	recentRepos: state.recentRepos.recentRepos,
	userValue: state.userValue.userValue,
	searchError: state.searchError.searchError,
	showSearch: state.showSearch.showSearch
});
const mapDispatchToProps = dispatch => ({
	getUserGithubData: user => dispatch(getUserGithubData(user)),
	setUserValue: user => dispatch(setUserValue(user)),
	setShowSearch: bool => dispatch(setShowSearch(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);