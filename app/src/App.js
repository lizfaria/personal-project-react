import React, { useEffect, useState } from 'react';
import './App.css';
import SearchParams from "./components/SearchParams.js";
import Results from "./components/Results.js"
import ErrorMessage from "./components/ErrorMessage.js"
import Button from "./components/Button.js"

const App = () => {
	const [userValue, setUserValue] = useState("");
	const [recentRepos, setRecentRepos] = useState(null);
	const [showSearch, setShowSearch] = useState(true);
	const [searchError, setSearchError] = useState(false);

	const handleSubmit = e => setUserValue(e.target.value);

	const toggleSearch = () => {
		setUserValue("")
		setRecentRepos(null)
		setSearchError(false)
	}

	const requestUser = async () => {
		const API_URL = "https://api.github.com/users"
		new Promise((resolve, reject) => {
			fetch(`${API_URL}/${userValue}/events`)
				.then(res => res.json())
				.then(res => {
					res.message === "Not Found" ? setSearchError(true) : setRecentRepos(res)
				})
				.catch(err => setSearchError(true))
		})  
	}

	useEffect(()=> {
		if (recentRepos !== null && recentRepos !== [] ) {
			setShowSearch(false)
		} else if (recentRepos === null) {
			setShowSearch(true)
		}
		if (searchError === true) {
			setShowSearch(false)
		}	
	},[recentRepos, showSearch, searchError])

  return (
    <div className="App">
		<SearchParams showSearch={showSearch} requestUser={requestUser} handleSubmit={handleSubmit} userValue={userValue}/>
		
		{ recentRepos !== null || searchError === true ? 
			<Button eventHandler={toggleSearch} /> 
		: null }
		
		{searchError === false && recentRepos !== null ? 
			<Results recentRepos={recentRepos} userValue={userValue} /> 
		: searchError === true ? 
			<ErrorMessage userValue={userValue} />
		: null }
    </div>
  )
}

export default App;
