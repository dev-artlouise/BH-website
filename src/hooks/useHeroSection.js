import { useQuery } from '@tanstack/react-query';
import { fetchHero } from '../api/backendService';
// import useAuthStore from '../store/useAuthStore';

export const useHeroSection = () => {
    // const { token } = useAuthStore(); // Retrieve token from Zustand store

    return useQuery({
        queryKey: ['repoData'], // Unique key for the query
        queryFn: () => fetchHero(), // Pass token to fetch function
        //enabled: !!token, // Only fetch if token is available
        retry: false, // Optional: Disable automatic retries if desired
        onError: (error) => {
            console.error('Error fetching repo data:', error.message);
        },
    });
};