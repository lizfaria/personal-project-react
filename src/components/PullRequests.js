import React from 'react';
import styled from 'styled-components'

 const PullRequest = ({recentRepos, List}) => {
   
    const recentRepoPullRequests = recentRepos.filter(recentRepo => recentRepo.type === "PullRequestEvent");
     if (recentRepoPullRequests.length > 0) {
        return (
            <List>
                {recentRepoPullRequests.map(recentRepo => {
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