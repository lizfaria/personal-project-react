import React, { useState, useEffect} from 'react';
import './App.css';
import SearchParams from "./components/SearchParams.js";
import Results from "./components/Results.js"

const App = () => {
	const [userValue, setUserValue] = useState("");
	const [recentRepos, setRecentRepos] = useState(null);
	const [usernameError, setUsernameError] = useState(false);
	const handleChange = e => setUserValue(e.target.value);
	
	useEffect(() => {
	},[setUsernameError, recentRepos])

	const handleSubmit = (userValue) => {
		const API_URL = "https://api.github.com/users"
		const getGithubData = async(res, err) => {
			try {
				const response = await fetch(`${API_URL}/${userValue}/events`)
				const data = await response.json();
				if (response.ok) {
					setUsernameError(false)
					setRecentRepos(data)
				} else {
					setUsernameError(true)
				}
			}
			catch(err) {
				console.log(err)
			}
		}
		getGithubData()
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
		{usernameError ? 
			<p>Username Not Found. Try Again</p>
		: null }
    </div>
  )
}

export default App;
