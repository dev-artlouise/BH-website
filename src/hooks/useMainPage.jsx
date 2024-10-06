import { useQuery } from '@tanstack/react-query';
import {
    fetchHero,
    fetchCompanies,
    fetchProjects,
    fetchProjectContent,
    fetchServices,
    fetchService,
    fetchFlowList
} from '../api/backendService';
// import useAuthStore from '../store/useAuthStore';

//get hero section content
export const useHeroSection = () => {
    // const { token } = useAuthStore(); // Retrieve token from Zustand store

    return useQuery({
        queryKey: ['heroData'], // Unique key for the query
        queryFn: () => fetchHero(), // Pass token to fetch function
        //enabled: !!token, // Only fetch if token is available
        retry: false, // Optional: Disable automatic retries if desired
        onError: (error) => {
            console.error('Error fetching hero data:', error.message);
        },
    });
};

//get all companies
export const useCompaniesSection = () => {
    // const { token } = useAuthStore(); // Retrieve token from Zustand store

    return useQuery({
        queryKey: ['companyData'], // Unique key for the query
        queryFn: () => fetchCompanies(), // Pass token to fetch function
        //enabled: !!token, // Only fetch if token is available
        retry: false, // Optional: Disable automatic retries if desired
        onError: (error) => {
            console.error('Error fetching company data:', error.message);
        },
    });
};

//get service content
export const useServiceSection = () => {
    // const { token } = useAuthStore(); // Retrieve token from Zustand store

    return useQuery({
        queryKey: ['servicesContentData'], // Unique key for the query
        queryFn: () => fetchService(), // Pass token to fetch function
        //enabled: !!token, // Only fetch if token is available
        retry: false, // Optional: Disable automatic retries if desired
        onError: (error) => {
            console.error('Error fetching Service Content data:', error.message);
        },
    });
};


//get all companies
export const useServiceListSection = () => {
    // const { token } = useAuthStore(); // Retrieve token from Zustand store

    return useQuery({
        queryKey: ['servicesData'], // Unique key for the query
        queryFn: () => fetchServices(), // Pass token to fetch function
        //enabled: !!token, // Only fetch if token is available
        retry: false, // Optional: Disable automatic retries if desired
        onError: (error) => {
            console.error('Error fetching Services data:', error.message);
        },
    });
};

//get projects
export const useProjectsList = () => {
    // const { token } = useAuthStore(); // Retrieve token from Zustand store

    return useQuery({
        queryKey: ['projectsData'], // Unique key for the query
        queryFn: () => fetchProjects(), // Pass token to fetch function
        //enabled: !!token, // Only fetch if token is available
        retry: false, // Optional: Disable automatic retries if desired
        onError: (error) => {
            console.error('Error fetching projects data:', error.message);
        },
    });
};

//get project content
export const useProjectContent = () => {
    // const { token } = useAuthStore(); // Retrieve token from Zustand store

    return useQuery({
        queryKey: ['projectData'], // Unique key for the query
        queryFn: () => fetchProject(), // Pass token to fetch function
        //enabled: !!token, // Only fetch if token is available
        retry: false, // Optional: Disable automatic retries if desired
        onError: (error) => {
            console.error('Error fetching projects data:', error.message);
        },
    });
};

//get flow list
export const useFlowListSection = () => {
    // const { token } = useAuthStore(); // Retrieve token from Zustand store

    return useQuery({
        queryKey: ['flowListData'], // Unique key for the query
        queryFn: () => fetchFlowList(), // Pass token to fetch function
        //enabled: !!token, // Only fetch if token is available
        retry: false, // Optional: Disable automatic retries if desired
        onError: (error) => {
            console.error('Error fetching projects data:', error.message);
        },
    });
};