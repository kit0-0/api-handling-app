
import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};

export default useSession;
