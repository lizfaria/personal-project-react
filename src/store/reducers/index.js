import { combineReducers } from 'redux';
import userValue from './userValue';
import recentRepos from './recentRepos';
import searchError from './searchError';
import showSearch from './showSearch';

const rootReducer = combineReducers({
    userValue: userValue,
    recentRepos: recentRepos,
    searchError: searchError,
    showSearch:showSearch
})

export default rootReducer