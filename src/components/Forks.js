import React from 'react';

const Forks = ({recentRepos}) => {
    const recentRepoForks = recentRepos.filter(recentRepo => recentRepo.type === "ForkEvent")
  
    if (recentRepoForks.length > 0) {
        return (
            <ul>
                {recentRepoForks.map(recentRepo => {
                    const {full_name, html_url } = recentRepo.payload.forkee;
                    const {repo_name} = recentRepo.repo;
                    const key = recentRepo.id;
                    return (
                        <li key={key}>
                            <a href={html_url} target="_blank">{full_name}</a>
                            <p>Forked From: {repo_name}</p>
                        </li>
                    )
                })}
            </ul>
        )
    } else {
        return (
            <p>No Recent Forks</p>
        )
    }
}

export default Forks;