'use server';

import UserProgress from '../../Client/Molecules/UserProgress';
import UserActivityList from '../../Client/Atoms/UserActivityList';
import UserLogin from '../../Client/Atoms/UserLogin';
import { fetchCurrentUser } from '../../../utils/user';

export default async function UserSummary() {
    const currentUserId = await fetchCurrentUser();
    if (currentUserId) {
        return <>
            <UserProgress userId={currentUserId}>
                <br />
                <UserActivityList userId={currentUserId} />
            </UserProgress>
            <br />
            <UserLogin />
        </>;
    }

    return <>
        <div style={{ marginTop: 20 }}>No user is logged in</div>
        <br />
        <UserLogin />
    </>;
}
