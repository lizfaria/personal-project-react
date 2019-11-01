import React from 'react';

const SearchParams = ({requestUser, handleSubmit, userValue}) => {
    return (
        <form 
            // className={showSearch !== true ? "hidden" : ""}
            onSubmit={e => {
                e.preventDefault();
                if (userValue !== "") { requestUser()};
            }}>
            <label htmlFor="search_form">Github Username</label>
            <input 
                id="search_form" 
                type="text" 
                placeholder="GitHub Username" 
                value={userValue} 
                onChange={handleSubmit} />
            <button>Get User</button>
        </form>
    )
}

export default SearchParams;