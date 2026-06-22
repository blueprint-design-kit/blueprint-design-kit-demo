
type UserActivityItem = {
    action: string;
    date: string;
};

export type UserType = {
    id: number;
    name: string;
    activity: UserActivityItem[];
};

export const USER_COOKIE_NAME = 'demo_user';

// Use array index as ID for lookup convenience
const users: UserType[] = [
    null,
    {
        id: 1,
        name: 'Bill',
        activity: [
            { action: 'Completed course 4', date: 'Apr 9' },
            { action: 'Completed course 3', date: 'Mar 12' },
            { action: 'Completed course 2', date: 'Feb 16' },
            { action: 'Completed course 1', date: 'Jan 3' }
        ],
    },
    {
        id: 2,
        name: 'Ted',
        activity: [
            { action: 'Completed course 1', date: 'Jan 21' }
        ],
    }
];

export default users;
