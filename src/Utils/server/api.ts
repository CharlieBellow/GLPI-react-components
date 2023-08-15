import { getSession } from "next-auth/react";

import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session) {
    config.headers["Authorization"] = `Bearer ${session.user.token}`;
  }

  return config;
});
