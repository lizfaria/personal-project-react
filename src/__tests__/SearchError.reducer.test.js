import SearchError from "../store/reducers/SearchError" 

const SET_SEARCH_ERROR = "SET_SEARCH_ERROR"
const reducer = SearchError;
const INITIAL_STATE = {
    searchError: false
};
 
describe("Invalid Github Username Search Error Reducer", () => {
    it("returns initial state", () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    describe("When fetchAllApps thunk is dispatched and api response returns ok", () => {
        it("set search error to false", () => {
          const setsearchError = {
            "searchError": {searchError: false}
          };
          const expectedState = {
            ...INITIAL_STATE,
            searchError: false
          };
          expect(reducer(undefined, setsearchError)).toEqual(expectedState);
        });
    })
    describe("When fetchAllApps thunk is dispatched and api response does not return ok", () => {
        it("set search error to true", () => {
            const setsearchError = {
                "searchError": {searchError: true}
            };
            const expectedState = INITIAL_STATE;
            expect(reducer(undefined, setsearchError)).toEqual(expectedState);
          });
    });
});
