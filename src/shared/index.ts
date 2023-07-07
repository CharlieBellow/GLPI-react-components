import { api } from "../Utils/server/api";
import { ServerError } from "../exceptions/ServerError";
import axios, { AxiosError } from "axios";
import { getErrorMessage } from "../exceptions/utils";
import { ItemWithID } from "../Contexts/TableContext";

export interface DeleteRegisterRequest {
    id: string;
    header?: {
        token: string;
    }
}

export type GeneralDeleteRegisterRequest = DeleteRegisterRequest & {
    id: string;
    resource?: string;
    translateMessage?: (message: string) => string;
    header?: {
        token: string;
    }
}
export interface DeleteRegisterResponse {
    error?: ServerError
}

export interface CreateErrorRequest {
    error: ServerError;
    translateMessage: (message: string) => string;
}

export interface GetRegisterRequest {
    id: string;
    header: {
        token: string;
    }
    resource: string;
    translateMessage: (message: string) => string;
}

export interface GetRegisterResponse<T extends ItemWithID> {
    data?: T;
    error?: ServerError;
}

export interface CreateOrUpdateRegisterRequest<T extends ItemWithID> {
    data: T;
    header: {
        token: string;
    }
    resource: string;
    translateMessage: (message: string) => string;
}

export interface CreateOrUpdateRegisterDTO<T extends ItemWithID> {
    data: T;
    token: string;
}


export function createErrorResponse({ error, translateMessage }: CreateErrorRequest) {
    const { statusCode, message } = error;
    return {
        error: {
            statusCode,
            message: translateMessage(message)
        }
    }
}

export function createPaginationErrorResponse({ error, translateMessage }: CreateErrorRequest) {
    const paginationError = createErrorResponse({ error, translateMessage })
    return {
        totalCount: 0,
        data: [],
        error: paginationError
    }
}

export async function deleteRegister({ translateMessage, resource, header, id }: GeneralDeleteRegisterRequest): Promise<DeleteRegisterResponse> {
    const token = header?.token ? header?.token : "";
    try {
        const url = `${resource}/${id}`;
        const response = await api.delete(url,
            {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
        );

        if (response.status = 204)
            return {};
        else return {
            error: {
                message: "Erro não identificado!"
            }
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            const errorMsg = getErrorMessage(serverError);
            if (translateMessage) {
                return createErrorResponse({
                    error: errorMsg,
                    translateMessage
                });
            }

            return {
                error: {
                    statusCode: 500,
                    message: "Erro na requisição ao servidor!"
                }
            };
        }
        return {
            error: {
                statusCode: 500,
                message: "Erro na requisição ao servidor!"
            }
        };
    }

}

export async function getRegister<T extends ItemWithID>({ id, header: { token }, resource, translateMessage }: GetRegisterRequest): Promise<GetRegisterResponse<T>> {
    try {
        const { data } = await api.get(`${resource + id}`,
            {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
        );

        const recordData = data[Object.keys(data)[0]]
        if (recordData) {
            return {
                data: recordData
            }
        }

        return {};
    } catch (error) {

        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            const errorMsg = getErrorMessage(serverError);
            return createErrorResponse({ error: errorMsg, translateMessage });
        }
        return {
            error: {
                statusCode: 500,
                message: "Erro na requisição ao servidor!"
            }
        };
    }
}

export async function createOrUpdateRegister<T extends ItemWithID>(
    {
        data,
        header: { token },
        resource,
        translateMessage
    }: CreateOrUpdateRegisterRequest<T>): Promise<GetRegisterResponse<T>> {
    const { id, ...body } = data;
    try {
        if (!id) {
            const { data } = await api.post(resource,
                {
                    ...body
                },
                {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }
            );
            const recordData = data[Object.keys(data)[0]];
            if (recordData) {
                return {
                    data: recordData
                }
            }
        }
        const { data: data2 } = await api.put(`${resource}/${id ? id : ""}`,
            {
                ...body
            },
            {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
        );
        const recordData = data2[Object.keys(data)[0]];
        if (recordData) {
            return {
                data: recordData
            }
        }

        return {};

    } catch (error) {

        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            const errorMsg = getErrorMessage(serverError);
            return createErrorResponse({ error: errorMsg, translateMessage });
        }
        return {
            error: {
                message: "Erro na requisição ao servidor!"
            }
        };
    }
}