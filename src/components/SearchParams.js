import React from 'react';

const SearchParams = ({handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search_username">Github Username</label>
            <input 
                id="search_username" 
                type="text" 
                name="username"
                placeholder="Type Something..." 
                onChange={handleChange} />
            <button>Get User</button>
        </form>
    )
}

export default SearchParams;