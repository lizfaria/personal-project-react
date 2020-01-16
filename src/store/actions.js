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
export const getUserGithubData = userName => async dispatch => {
    try {
        const response = await fetch(`${API_URL}/${userName}/events`)
        const data = await response.json();
        if (response.ok) {
            await dispatch(setSearchError(false));
            await dispatch(setShowSearch(false));
            await dispatch(setRecentRepos(data));
        } else {
            await dispatch(setSearchError(true));
        }
    }
    catch(err) {
        dispatch(setSearchError(true));
    }
}
