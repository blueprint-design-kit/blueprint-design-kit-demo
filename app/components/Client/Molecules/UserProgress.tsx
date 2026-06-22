'use client';

import { useState } from 'blueprint-design-kit/ui';

import ProgressBar from '../Atoms/ProgressBar';
import users from '../../../constants/demoUsers';
import { useEffect } from 'react';

function updateProgress(prev: number | undefined) {
    const amount = 20;
    return prev > 80 ? 10 : (prev || 10) + amount;
}

type UserProgressProps = {
    userId: number;
    children?: React.ReactNode;
}

export default function UserProgress({ userId, children }: UserProgressProps) {
    const [progress, setProgress] = useState<number | undefined>('progress', 1);
    const currentUser = users[userId];

    useEffect(() => {
        const progressBasedOnActivity = currentUser ? Math.round(currentUser.activity.length / 5 * 100) : 1;
        setProgress(progressBasedOnActivity);
    }, [userId, currentUser]);

    function onTapAction() {
        setProgress(updateProgress);
    }

    if (!userId) {
        return <div>Please log in to see your progress.</div>;
    }

    if (!currentUser) {
        return <div>User not found.</div>;
    }

    const status = progress > 60 ? 'good' : progress > 30 ? 'ok' : 'bad';

    return (
        <div>
            <h3>Hi {currentUser ? currentUser.name : 'Guest'}, your progress so far:</h3>
            <ProgressBar progress={progress} status={status} onTapAction={onTapAction} />
            {children}
        </div>
    );
}
