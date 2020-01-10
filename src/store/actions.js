export const setUserValue = (userValue = "") => ({ 
    type: "SET_USER", 
    payload: userValue
});
export const setRecentRepos = (recentRepos = null) => ({ 
    type: "SET_REPOS", 
    payload: recentRepos
});
export const setShowSearch = (showSearch = true) => ({ 
    type: "SET_SHOW_SEARCH", 
    payload: showSearch
});
export const setSearchError = (searchError = false) => ({ 
    type: "SET_SEARCH_ERROR", 
    payload: searchError
});

const API_URL = "https://api.github.com/users"
export const requestUser = userValue => dispatch => {
    return fetch(`${API_URL}/${userValue}/events`)
        .then(res => res.json())
        .then(res => res.message === "Not Found" ? dispatch(setSearchError(true)) : dispatch(setRecentRepos(res)))
        .catch(err => dispatch(setSearchError(true)))
}


