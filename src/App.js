import React, { useState } from 'react';
import './App.css';
import SearchParams from "./components/SearchParams.js";
import Results from "./components/Results.js"

const App = () => {
	const [userValue, setUserValue] = useState("");
	const [recentRepos, setRecentRepos] = useState(null);

	const handleChange = e => setUserValue(e.target.value);

	const handleSubmit = async (userValue) => {
		const API_URL = "https://api.github.com/users"
		new Promise((resolve, reject) => {
			fetch(`${API_URL}/${userValue}/events`)
				.then(res => res.json())
				.then(res => setRecentRepos(res))
				.catch(err => console.log(err))
		})  
	}

  return (
    <div className="App">
		{recentRepos === null || recentRepos === [] ? 
			<SearchParams 
			handleSubmit={handleSubmit} 
			handleChange={handleChange} 
			userValue={userValue}
			/>
		: null}
		{ recentRepos !== null ? 
			<Results recentRepos={recentRepos} userValue={userValue} /> :			
			null
		}
    </div>
  )
}

export default App;
