import React from 'react';

const SearchParams = ({handleSubmit, handleChange, userValue}) => {
    return (
        <form 
            // className={showSearch !== true ? "hidden" : ""}
            onSubmit={e => {
                e.preventDefault();
                // if (userValue !== "") { 
                    return handleSubmit(userValue)
                // };
            }}>
            <label htmlFor="search_username">Github Username</label>
            <input 
                id="search_username" 
                type="text" 
                name="username"
                placeholder="GitHub Username" 
                value={userValue} 
                onChange={handleChange} />
            <button>Get User</button>
        </form>
    )
}

export default SearchParams;