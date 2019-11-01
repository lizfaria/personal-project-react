import React, { useState } from 'react';
import {setRecentRepos, handleSubmit}  from "./store/actions.js"
import { connect } from "react-redux";
import './App.css';
import SearchParams from "./components/SearchParams.js";
import Results from "./components/Results.js"

const App = ({recentRepos, handleSubmit}) => {
	const [userValue, setUserValue] = useState("");
	// const [recentRepos, setRecentRepos] = useState(null);

	const handleChange = e => setUserValue(e.target.value);
	
	// const handleSubmit = async (userValue) => {
	// 	const API_URL = "https://api.github.com/users"
	// 	new Promise((resolve, reject) => {
	// 		fetch(`${API_URL}/${userValue}/events`)
	// 			.then(res => res.json())
	// 			.then(res => setRecentRepos(res))
	// 			.catch(err => console.log(err))
	// 	})  
	// }

  return (

		<div className="App">
			{recentRepos === "" || recentRepos === [] ? 
				<SearchParams 
				handleSubmit={handleSubmit} 
				handleChange={handleChange} 
				userValue={userValue}
				/>
			: null}
			{ recentRepos !== "" ? 
				<Results recentRepos={recentRepos} userValue={userValue} /> :			
				null
			}
		</div>
  )
}

const mapStateToProps = state => ({
	recentRepos: state.recentRepos
  });

const mapDispatchToProps = dispatch => ({
	setRecentRepos: recentRepos => dispatch(setRecentRepos(recentRepos)),
	handleSubmit: userValue => dispatch(handleSubmit(userValue))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(App);
