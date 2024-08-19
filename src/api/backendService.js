// src/api/githubService.js
const API_URL = 'http://127.0.0.1:8000/api';

export const fetchHero = async (/*token*/) => {
    const response = await fetch(`${API_URL}/hero-section`, {
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
    });
    if (!response.ok) throw new Error('Failed to fetch repository data');
    return response.json();
};
export const fetchCompanies = async (/*token*/) => {
    const response = await fetch(`${API_URL}/companies`, {
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
    });
    if (!response.ok) throw new Error('Failed to fetch repository data');
    return response.json();
};