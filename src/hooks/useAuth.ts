
import { ServerError } from "@/exceptions/ServerError";
import { getErrorMessage } from "@/exceptions/utils";
import axios, { AxiosError } from "axios";
import { api } from "../Utils/server/api";
import { translateUserMessage } from "./useUsers";

export type UserForgotPasswordRequest = {
    email: string;
}

export type UserForgotResponse = {
    error?: ServerError;
}

export type UserRefreshTokenRequest = {
    token: string;
}

export type UserRefreshTokenResponse = {
    accessToken: string;
    refreshToken: string;
    error?: ServerError;
}

export function createUserErrorResponse({ statusCode, message }: ServerError) {
    return {
        error: {
            statusCode,
            message: translateUserMessage(message)
        }
    }
}



export async function forgotPassword({ email }: UserForgotPasswordRequest): Promise<UserForgotResponse> {
    try {
        const response = await api.post('/forgot', {
            email
        });

        return {};

    } catch (error) {

        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            const errorMsg = getErrorMessage(serverError);
            return createUserErrorResponse(errorMsg);
        }
        return {
            error: {
                message: "Erro na requisição ao servidor!"
            }
        };
    }
}

export async function userRefreshToken({ token }: UserRefreshTokenRequest): Promise<UserRefreshTokenResponse> {
    try {
        const { data } = await api.post('/auth/refresh', {
            token
        });
        if (data?.accessToken) {
            return data
        } else
            throw new Error("Erro na Requisição do Servidor");

    } catch (error) {

        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            const errorMsg = getErrorMessage(serverError);
            const userError = createUserErrorResponse(errorMsg);
            return {
                accessToken: "",
                refreshToken: "",
                ...userError
            };
        }
        return {
            accessToken: "",
            refreshToken: "",
            error: {
                message: "Erro na requisição ao servidor!"
            }
        };
    }
}