import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com"; // Placeholder, replace with your API

// Set up Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Authentication: Login
export const login = (email, password) =>
  new Promise((resolve, reject) => {
    if (email === "test@example.com" && password === "asd123") {
      resolve({ data: { token: "mocked-token-12345" } });
    } else {
      reject("Invalid credentials");
    }
  });

// Task Operations: CRUD
// export const getTasks = () => axiosInstance.get("/todos");
export const getTasks = async (page = 1, limit =10) => {
  return axiosInstance.get("/todos", {
    params: {
      _page: page,      // Page number
      _limit: limit,    // Limit number of tasks per page
    },
  });
};


export const getTaskById = (id) => axiosInstance.get(`/todos/${id}`);

export const createTask = (task) => axiosInstance.post(`/todos`, task);

export const updateTask = (id, updatedTask) => axiosInstance.put(`/todos/${id}`, updatedTask);

export const deleteTask = (id) => axiosInstance.delete(`/todos/${id}`);
