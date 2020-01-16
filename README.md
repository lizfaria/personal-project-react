# Test-Driven React-Redux Personal Project

## Wireframes
https://bridgeschool.invisionapp.com/public/share/5GWTMSJMH


## App Description
A search form with an input that allows the user to enter a GitHub username and click the submit button to fetch the user information from Github Events API. 

- On change of input, a redux action is triggered to store the new username state, a/nd on submit, an dispatch is triggered to call the redux thunk for the inputted GitHub username

- After clicking the search button, a thunk is dispatched and makes an API call to Github API Events Endpoint to fetch the inputted username's information

- If an invalid username is searched, the thunk dispatches an action which prompts a form error prompting the user to try another name

- When user information has been returned, the thunk dispatches two actions. One to hide the form, and another to save the 30 most recent user events to recentRepos state.

- I filter through the events and display github username with two lists: the most recent repositories (repos) forked by the username provided and their most recent pull requests.

- Each item in the forked repos list:
    - Displays the name of the repo as a link — when this link is clicked it takes you to that repo in a new tab
    - Displays the name of the repo it was forked from
    
- Each item in the pull request list:
    - Displays the name of the pull request as a link— when this link is clicked it takes you to that pull request in a new tab
    - Displays the current status of the pull request (Open, Merged, Closed) by colour coding the list item or display the status in words

- The user can click the back button to go back to the form to search for another github user 

- This is a Test Driven Development (TDD) App. There are tests for all of the components, reducers, and helper functions.

