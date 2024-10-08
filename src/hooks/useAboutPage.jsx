import { useQuery } from "@tanstack/react-query";

import {
  fetchStats,
  fetchAboutUs,
  fetchMissionVision,
  fetchOurStory,
  fetchTeam,
} from "../api/backendService";

export const useStats = () => {
  // const { token } = useAuthStore(); // Retrieve token from Zustand store

  return useQuery({
    queryKey: ["statsData"], // Unique key for the query
    queryFn: () => fetchStats(), // Pass token to fetch function
    //enabled: !!token, // Only fetch if token is available
    retry: false, // Optional: Disable automatic retries if desired
    onError: (error) => {
      console.error("Error fetching projects data:", error.message);
    },
  });
};

export const useAboutUs = () => {
  // const { token } = useAuthStore(); // Retrieve token from Zustand store

  return useQuery({
    queryKey: ["aboutUsData"], // Unique key for the query
    queryFn: () => fetchAboutUs(), // Pass token to fetch function
    //enabled: !!token, // Only fetch if token is available
    retry: false, // Optional: Disable automatic retries if desired
    onError: (error) => {
      console.error("Error fetching projects data:", error.message);
    },
  });
};

export const useVisionandMission = () => {
  // const { token } = useAuthStore(); // Retrieve token from Zustand store

  return useQuery({
    queryKey: ["visionmissionData"], // Unique key for the query
    queryFn: () => fetchMissionVision(), // Pass token to fetch function
    //enabled: !!token, // Only fetch if token is available
    retry: false, // Optional: Disable automatic retries if desired
    onError: (error) => {
      console.error("Error fetching projects data:", error.message);
    },
  });
};

export const useOurStory = () => {
  // const { token } = useAuthStore(); // Retrieve token from Zustand store

  return useQuery({
    queryKey: ["ourStoryData"], // Unique key for the query
    queryFn: () => fetchOurStory(), // Pass token to fetch function
    //enabled: !!token, // Only fetch if token is available
    retry: false, // Optional: Disable automatic retries if desired
    onError: (error) => {
      console.error("Error fetching projects data:", error.message);
    },
  });
};

export const useTeam = () => {
  // const { token } = useAuthStore(); // Retrieve token from Zustand store

  return useQuery({
    queryKey: ["teamData"], // Unique key for the query
    queryFn: () => fetchTeam(), // Pass token to fetch function
    //enabled: !!token, // Only fetch if token is available
    retry: false, // Optional: Disable automatic retries if desired
    onError: (error) => {
      console.error("Error fetching our team data:", error.message);
    },
  });
};
