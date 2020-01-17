import userValue from "../store/reducers/userValue" 

const SET_USER = "SET_USER"
const reducer = userValue;
const INITIAL_STATE = {
    userValue: ""
};
 
describe("Update UserName Value according to input text typed by user", () => {
    it("returns initial state", () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    describe("When user types lizfaria", () => {
        it("sets uservalue state to lizfaria", () => {
          const setUserValueState = {
            type: SET_USER,
            payload: "LizFaria"
          };
          const expectedState = {
            ...INITIAL_STATE,
            userValue: "LizFaria"
          };
          expect(reducer(undefined, setUserValueState)).toEqual(expectedState);
        });
    })
});
