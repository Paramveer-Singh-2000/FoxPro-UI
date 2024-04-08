import axios from 'axios';

// Define a base URL for your API if applicable (replace with your actual URL)
const BASE_URL = 'http://localhost:3000/api'; // Adjust port if needed

// Interface for API response data (modify to match your API's response structure)
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

// Generic function for making API requests with error handling and type safety
async function fetchData<T>(url: string, method: string, data?: any): Promise<ApiResponse<T>> {
  try {
    const fullUrl = `${BASE_URL}${url}`;
    const response = await axios({
      method,
      url: fullUrl,
      data,
    });

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    // Handle errors appropriately (e.g., log to console, display user-friendly message)
    console.error('API request error:', error);
    throw error; // Re-throw for potential handling in calling code
  }
}

// Specific functions for GET, POST, PUT, and DELETE requests
export async function get<T>(url: string): Promise<ApiResponse<T>> {
  return await fetchData<T>(url, 'GET');
}

export async function post<T>(url: string, data: any): Promise<ApiResponse<T>> {
  return await fetchData<T>(url, 'POST', data);
}

export async function put<T>(url: string, data: any): Promise<ApiResponse<T>> {
  return await fetchData<T>(url, 'PUT', data);
}

export async function del<T>(url: string): Promise<ApiResponse<T>> {
  return await fetchData<T>(url, 'DELETE');
}
