import { combineReducers } from 'redux';
import userValue from './uservalue';
import recentRepos from './recentRepos';
import searchError from './searchError';
import showSearch from './showSearch';

export default combineReducers({
    userValue,
    recentRepos,
    searchError,
    showSearch
})
