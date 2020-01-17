import showSearch from "../store/reducers/showSearch" 

const SET_SHOW_SEARCH = "SET_SHOW_SEARCH"
const reducer = showSearch;
const INITIAL_STATE = {
    showSearch: true
};
 
describe("Update show search Value when user clicks submit", () => {
    it("returns initial state", () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    describe("When user types valid username and clicks submit", () => {
        it("sets showsearch to false", () => {
          const setShowSearchState = {
            type: SET_SHOW_SEARCH,
            payload: false
          };
          const expectedState = {
            ...INITIAL_STATE,
            showSearch: false
          };
          expect(reducer(undefined, setShowSearchState)).toEqual(expectedState);
        });
    })
    describe("When user types invalid username and clicks submit", () => {
        it("sets showsearch to true", () => {
          const setShowSearchState = {
            type: SET_SHOW_SEARCH,
            payload: true
          };
          const expectedState = {
            ...INITIAL_STATE,
            showSearch: true
          };
          expect(reducer(undefined, setShowSearchState)).toEqual(expectedState);
        });
    })
});
