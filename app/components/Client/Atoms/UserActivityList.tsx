'use client';

import { useEffect } from 'react';
import { useState } from 'blueprint-design-kit/ui';
import users from '../../../constants/demoUsers';

function fetchUserActivity(userId: number) {
    const user = users[userId];
    return new Promise<typeof user.activity>((resolve) => {
        setTimeout(() => {
            resolve(user && user.activity || []);
        }, 1000);
    });
}

export default function UserActivityList({ userId }) {
    const [loading, setLoading] = useState('loading', false);
    const [latestActivity, setLatestActivity] = useState('latestActivity', []);

    useEffect(() => {
        setLatestActivity([]);
        async function getActivity() {
            setLoading(true);
            const activity = await fetchUserActivity(userId);
            if (activity) {
                setLatestActivity(activity);
            }
            setLoading(false);
        }
        if (userId) { getActivity() }
    }, [userId]);

    return <div>
        {loading && 'Loading activity...'}
        {latestActivity && latestActivity.length > 0 &&
            <>
                <div>Activity History:</div>
                <ul>
                    {latestActivity.map(({ action, date }, index) => {
                        return <li key={index}>{action}: {date}</li>
                    })}
                </ul>
            </>
        }
    </div>
}
