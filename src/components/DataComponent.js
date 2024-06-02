
import React from 'react';
import { useQuery } from 'react-query';
import { getData } from '../api/monkApi';
import Loading from './Loading';
import Success from './Success';
import Error from './Error';
import useSession from '../hooks/useSession';

const DataComponent = () => {
    const { isSessionValid } = useSession();

    const { data, error, isLoading } = useQuery('fetchData', getData, {
        enabled: isSessionValid,
    });

    if (!isSessionValid) {
        return <Error error={{ message: 'Session Timeout' }} />;
    }

    if (isLoading) return <Loading />;
    if (error) return <Error error={error} />;
    return <Success data={data} />;
};

export default DataComponent;
