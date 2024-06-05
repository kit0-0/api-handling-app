
import React, { createContext, useState, useEffect } from 'react';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
    const [isSessionValid, setIsSessionValid] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            
            // For demonstration, session is always valid
            setIsSessionValid(true);
        }, 60000); // Check every 60 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <SessionContext.Provider value={{ isSessionValid, setIsSessionValid }}>
            {children}
        </SessionContext.Provider>
    );
};

export { SessionContext, SessionProvider };
