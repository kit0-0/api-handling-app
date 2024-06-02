
import React from 'react';

const Error = ({ error }) => (
    <div>
        <h1>Error</h1>
        <p>{error.message}</p>
    </div>
);

export default Error;
