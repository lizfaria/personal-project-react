import React from 'react';
import ReactDOM from 'react-dom'
import SearchParams from '../components/SearchParams'

test("calls handleSubmit on form submit", () => {
    const handleSubmit = jest.fn();
    const container = document.createElement("div")
    ReactDOM.render(<SearchParams 
        handleSubmit={handleSubmit} 
        />, container)
    const form = container.querySelector('form')
    const {username} = form.elements;
    username.value="pkanal"
    
    form.dispatchEvent(new window.Event('submit'))

    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(handleSubmit).toHaveBeenCalledWith(username.value)
})