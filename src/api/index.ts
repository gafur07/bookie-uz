import { BASE_URL } from "@/config";
import axios from "axios";

const axiosClassic = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "Application/json",
	},
});

axiosClassic.interceptors.request.use((config) => {
	const auth = JSON.parse(localStorage.getItem("persist:booky") || "").auth;
	const token = JSON.parse(auth).token
	config.headers.Authorization = token ? `Bearer ${token}` : "";
	return config;
});

export { axiosClassic };

