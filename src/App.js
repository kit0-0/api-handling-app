
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SessionProvider } from './context/SessionContext';
import DataComponent from './components/DataComponent';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider>
                <div className="App">
                    <DataComponent />
                </div>
            </SessionProvider>
        </QueryClientProvider>
    );
}

export default App;
