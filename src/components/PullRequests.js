import React from 'react';

 const PullRequest = ({recentRepos, List}) => {
    // filter for pull request events
    const recentRepoPullRequests = recentRepos.filter(recentRepo => recentRepo.type === "PullRequestEvent");
    
    if (recentRepoPullRequests.length > 0) {
        return (
            <List>
                {recentRepoPullRequests.map(recentRepo => {
                    //  for each item in PR array, destructor for title, url, state and id of pr event 
                    const {title, url, state} = recentRepo.payload.pull_request;
                    const key = recentRepo.id;
                    return(
                        <li key={key}>
                            <a href={url} target="_blank">{title}</a>
                            <p className = {state === "closed" ? "purple" : state === "open" ? "red" : "green"}>
                                {state}
                            </p>
                        </li>
                    )
                })}
            </List>   
        ) 
    } else {
        return (
            <p>No Recent Pull Requests</p>
        )
    }
}
export default PullRequest;