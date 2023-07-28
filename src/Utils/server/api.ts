import axios from "axios";
import { getAuthSession } from "@/Utils/auth";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(async (config) => {
  const session = await getAuthSession();

  if (session) {
    config.headers["Authorization"] = `Bearer ${session.user.token}`;
  }

  return config;
});
