import { Session } from "next-auth";
import { getSession } from "next-auth/react";

import axios, { AxiosError, isAxiosError } from "axios";

import { getAuthSession } from "@/Utils/auth";

import { DEFAULT_ERRORS } from "@/exceptions/default-errors";
import { ApiError, HttpError } from "@/exceptions/http-error";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(async (config) => {
  let session: Session | null = null;

  const isServer = typeof window === "undefined";

  if (isServer) {
    session = await getAuthSession();
  } else {
    session = await getSession();
  }

  if (session) {
    config.headers[
      "Authorization"
    ] = `Bearer ${session.sessionTokenInfo.token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (!isAxiosError(error)) {
      return Promise.reject(
        new HttpError(
          "Um erro inesperado ocorreu. Por favor, tente novamente mais tarde."
        )
      );
    }

    const errorApi = error as AxiosError<ApiError>;

    if (errorApi.response?.status === 500) {
      return Promise.reject(new HttpError(DEFAULT_ERRORS[500]));
    }

    if (errorApi.response?.status === 404) {
      return Promise.reject(new HttpError(DEFAULT_ERRORS[404]));
    }

    if (!errorApi.response?.data.message) {
      return Promise.reject(new HttpError(DEFAULT_ERRORS.generic));
    }

    return Promise.reject(new HttpError(errorApi.response.data.message));
  }
);
