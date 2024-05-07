import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJobs = createAsyncThunk(
    'jobs/fetchJobs',
    async ({ limit, offset }) => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        const body = JSON.stringify({ limit, offset });
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body,
        };

        const response = await fetch(
            'https://api.weekday.technology/adhoc/getSampleJdJSON',
            requestOptions
        );
        const result = await response.json();
        console.log('API response:', result);
        return result;
    }
);