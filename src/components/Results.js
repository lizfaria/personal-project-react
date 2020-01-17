import React from 'react';
import Forks from "./Forks.js"
import PullRequests from "./PullRequests.js"
import styled from 'styled-components'

 const Results = ({recentRepos, userValue}) => {
    const Header = styled.h1`
        text-align: center;
        font-weight: bolder;
        font-size: 48px;
    `
    const List = styled.ul`{
        margin: 0;
        padding: 0;
        text-align: left;
        li {
            list-style: none;
            border: 2px solid #9f9f9f;
            border-radius: 10px;
            padding: 10px 15px;
            margin-bottom: 20px;
            a {
                text-decoration: none;
                color: inherit;
                font-weight: bold;
                margin-bottom: 8px;
                font-size: 20px;
                display:inline-block;
            }
            p {
                padding: 0;
                margin: 0;
            }
          }
    }`
    
      
    return (
        <div>
            <Header>{userValue}</Header>
            <br></br>
            <h2>Recent Forks</h2>
            <Forks recentRepos={recentRepos} List={List}/>
            <br></br>
            <h2>Recent Pull Requests</h2>
            <PullRequests recentRepos={recentRepos} List={List}/>
        </div>
    )
}
export default Results;