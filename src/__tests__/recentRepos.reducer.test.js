import recentRepos from "../store/reducers/recentRepos" 

const SET_REPOS = "SET_REPOS"
const reducer = recentRepos;
const INITIAL_STATE = {
    recentRepos: null
};
 
describe("Update RecentRepos according to API Response", () => {
    it("returns initial state", () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    describe("When user clicks submit", () => {
        it("sets repos payload to array with up to thirty objects", () => {
          const setRecentRepoState = {
            type: SET_REPOS,
            payload: [{}, {}, {}]
          };
          const expectedState = {
            ...INITIAL_STATE,
            recentRepos: [{}, {}, {}]
          };
          expect(reducer(undefined, setRecentRepoState)).toEqual(expectedState);
        });
    })
});