
import React from 'react';

const Success = ({ data }) => (
    <div>
        <h1>Success</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
);

export default Success;
