// create initial state
const initialState = {
    recentRepos: null
  };

const recentRepos = (state = initialState, action) => {
    switch (action.type) {
        case "SET_REPOS": 
        return {
            ...state,
            recentRepos: action.payload
        } 
        default: 
            return state;
    }
}

export default recentRepos;

