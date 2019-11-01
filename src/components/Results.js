import React from 'react';
import Forks from "./Forks.js"
import PullRequests from "./PullRequests.js"

 const Results = ({recentRepos, userValue}) => {
    return (
        <div>
            <h1>{userValue}</h1>
            <br></br>
            <h2>Recent Forks</h2>
            <Forks recentRepos={recentRepos} />
            <br></br>
            <h2>Recent Pull Requests</h2>
            <PullRequests recentRepos={recentRepos} />
        </div>
    )
}
export default Results;