
export const API_LIST_ACTION_TYPES = {
    SET_REPOS: "SET REPOS",
  };

export const setRecentRepos = (recentRepos = "") => ({ 
    type: API_LIST_ACTION_TYPES.SET_REPOS, 
    payload: recentRepos
});

const API_URL = "https://api.github.com/users"
export const handleSubmit = userValue => dispatch => {
    return fetch(`${API_URL}/${userValue}/events`)
        .then(res => res.json())
        .then(res => dispatch(setRecentRepos(res)))
}
