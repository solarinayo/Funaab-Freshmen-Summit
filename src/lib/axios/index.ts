import axios from 'axios';

export const baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

const client = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // OTHER HEADERS GO HERE
  },
});

// INTERCEPTORS
client.interceptors.request.use(
  async (config) => {
    // interceptor logic goes here. e.g additional headers, request encryption, session management, etc.

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  async (response) => {
    // interceptor logic goes here. e.g additional headers, request encryption, session management, etc.

    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default client;
