// create inital state
const initialState = {
    showSearch: true
  };

const showSearch = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SHOW_SEARCH":
            return {
                ...state,
                showSearch: action.payload
            } 
        default: 
            return state;
    }
}

export default showSearch


