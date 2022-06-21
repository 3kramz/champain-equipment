import React from 'react';
import { Grid } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Grid ariaLabel="loading-indicator" />
        </div>
    );
};

export default Loading;