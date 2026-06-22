'use client';

import { useEffect } from 'react';
import { useState } from 'blueprint-design-kit/ui';
import users from '../../../constants/demoUsers';
import {
    clearCurrentUser,
    fetchCurrentUser,
    setCurrentUser,
} from '../../../utils/user';


const buttonStyles = {
    margin: 4,
};

export default function UserLogin() {
    const [currentUserId, setCurrentUserIdState] = useState('currentUserId', null);

    function handleLoginButtonClick(ev: React.MouseEvent<HTMLButtonElement>) {
        if (ev && ev.target) {
            const userId = Number((ev.target as HTMLButtonElement).dataset.userid);
            setCurrentUser(userId);
            setCurrentUserIdState(userId);
        }
    }

    function handleLogoutButtonClick() {
        clearCurrentUser();
        setCurrentUserIdState(null);
    }

    useEffect(() => {
        async function getUser() {
            setCurrentUserIdState(await fetchCurrentUser());
        }
        getUser();
    }, []);

    if (currentUserId) {
        return <div>
            <button onClick={handleLogoutButtonClick}>Logout</button>
        </div>
    }

    return <div>
        Login as:
        {users.map((user) => {
            if (user) {
                return <button key={user.id} style={buttonStyles} data-userid={user.id} onClick={handleLoginButtonClick}>{user.name}</button>;
            }
        })}
    </div>
}
