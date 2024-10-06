// src/api/githubService.js
const API_URL = "http://127.0.0.1:8000/api";

export const fetchHero = async (/*token*/) => {
  const response = await fetch(`${API_URL}/hero-section`, {
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // },
  });
  if (!response.ok) throw new Error("Failed to fetch repository data");
  return response.json();
};

export const fetchCompanies = async (/*token*/) => {
  const response = await fetch(`${API_URL}/companies`, {
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // },
  });
  if (!response.ok) throw new Error("Failed to fetch repository data");
  return response.json();
};

export const fetchService = async (/*token*/) => {
  const response = await fetch(`${API_URL}/service`, {
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // },
  });
  if (!response.ok) throw new Error("Failed to fetch Service Content data");
  return response.json();
};

export const fetchServices = async (/*token*/) => {
  const response = await fetch(`${API_URL}/service-list`, {
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // },
  });
  if (!response.ok) throw new Error("Failed to fetch services data");
  return response.json();
};

export const fetchProjectContent = async (/*token*/) => {
  const response = await fetch(`${API_URL}/project`, {
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // },
  });
  if (!response.ok) throw new Error("Failed to fetch project content data");
  return response.json();
};

export const fetchProjects = async (/*token*/) => {
  const response = await fetch(`${API_URL}/projectList`, {
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // },
  });
  if (!response.ok) throw new Error("Failed to fetch repository data");
  return response.json();
};

export const fetchFlowList = async (/*token*/) => {
  const response = await fetch(`${API_URL}/flowList`, {
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // },
  });
  if (!response.ok) throw new Error("Failed to fetch repository data");
  return response.json();
};

export const fetchTestimonial = async (/*token*/) => {
  const response = await fetch(`${API_URL}/testimonial`, {});
  if (!response.ok) throw new Error("Failed to fetch testimonial content data");
  return response.json();
};

export const fetchTestimonials = async (/*token*/) => {
  const response = await fetch(`${API_URL}/testimonialList`, {});
  if (!response.ok) throw new Error("Failed to fetch testimonials data");
  return response.json();
};

export const fetchStats = async (/*token*/) => {
  const response = await fetch(`${API_URL}/reputation`, {});
  if (!response.ok) throw new Error("Failed to fetch stats data");
  return response.json();
};

export const fetchAboutUs = async (/*token*/) => {
  const response = await fetch(`${API_URL}/aboutus`, {});
  if (!response.ok) throw new Error("Failed to fetch stats data");
  return response.json();
};

export const fetchMissionVision = async (/*token*/) => {
  const response = await fetch(`${API_URL}/missionvission`, {});
  if (!response.ok) throw new Error("Failed to fetch mission and vision data");
  return response.json();
};
