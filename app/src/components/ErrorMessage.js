import React from 'react';

const ErrorMessage = ({userValue}) => {
    return (
        <h2>
            Whoops {userValue} Doesn't Exist
        </h2>
    )
}

export default ErrorMessage;