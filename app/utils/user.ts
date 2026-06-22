'use server';

import { cookies } from 'next/headers';
import { USER_COOKIE_NAME } from '../constants/demoUsers';

export async function fetchCurrentUser() {
    const cookieStore = await cookies();
    const { value } = cookieStore.get(USER_COOKIE_NAME) || {};
    return value ? Number(value) : null;
}

export async function setCurrentUser(userId: number) {
    const cookieStore = await cookies();
    cookieStore.set(USER_COOKIE_NAME, String(userId));
}

export async function clearCurrentUser() {
    const cookieStore = await cookies();
    cookieStore.delete(USER_COOKIE_NAME);
}
