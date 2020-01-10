// create inital state
const initalState = {
    recentRepos: null
  };


export default function recentRepos(state = initalState, action) {
    if (action.type = "SET_REPOS") {
        return action.payload;
    } else {
        return state;
    }
}
