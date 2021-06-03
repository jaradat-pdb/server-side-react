import React from 'react';
import axios from 'axios';
import useSWR from 'swr';

export const githubUsersBaseUrl = 'https://api.github.com/users';

export async function getUsersData() {
    try {
        const res = await axios.get(githubUsersBaseUrl);
        console.log('Received response for request of all users data');
        return {
            data: res.data,
            error: e
        };
    }
    catch(e) {
        return {
            data: null,
            error: e
        };
    }
}

export async function fetchUserData(userId) {
    const { resp, err } = useSWR(
        `${githubUsersBaseUrl}/${userId}`,
        (url) => axios.get(url).then(res => res.data).catch(e => e)
    );
    if (resp) return { data: resp };
    if (err) return { error: err };
}