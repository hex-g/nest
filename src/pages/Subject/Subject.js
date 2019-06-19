import React from 'react'

export const Subject =  () => {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');

    return(
        <div>{subject}</div>
    )}

export default Subject