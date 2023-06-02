import { ServerError } from "../../../exceptions/ServerError";
import { getErrorMessage } from "../../../exceptions/utils";
import axios, { AxiosError } from "axios";
import { api } from "../../../Utils/server/api";
import {
    createOrUpdateRegister,
    CreateOrUpdateRegisterDTO,
    deleteRegister,
    DeleteRegisterRequest,
    DeleteRegisterResponse,
    GetRegisterResponse
}
    from "../../../shared";
import { PaginationRequest } from "../../../components/Table/types/paginationrequest";
import { PaginationResponse } from "../../../components/Table/types/paginationresponse";
import { PartnerCategory } from "../../../components/Table/core/partner-category.entity";

const baseURL = '/core/partnercategory';

type PartnerCategoryData = {
    partnerCategory: PartnerCategory
}


export function translateMessage(message: string) {
    switch (message) {
        case "Partner Category not found!":
            return "Especialidade não encontrada";
        case "Unauthorized":
            return "Token de Usuário Inválido ou Expirado!";
        default:
            return "Erro ao realizar requisição!"
    }
}


export async function getPaginationData({
    page,
    params,
    token
}: PaginationRequest): Promise<PaginationResponse<PartnerCategory>> {
    const {
        sortType = "asc",
        column = "description",
        searchQuery = "",
        skip = (page - 1) * 10,
        take = 10
    } = params;
    try {
        const response = await api.get(`${baseURL}/pagination`, {
            params: {
                sortType,
                column,
                searchQuery,
                skip,
                take,
            },
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        const { data } = response;

        const totalCount = data.total;
        const partnerCategories = data.data.map(({ partnerCategory }: PartnerCategoryData) => {
            return {
                id: partnerCategory.id,
                description: partnerCategory.description,
                createdAt: new Date().toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        });
        return {
            data: partnerCategories,
            totalCount
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serverError = error as AxiosError<ServerError>;
            const errorMsg = getErrorMessage(serverError);
            return {
                data: [],
                totalCount: 0,
                error: errorMsg
            }
        }
        return {
            data: [],
            totalCount: 0,
            error: {
                statusCode: 500,
                message: "Erro na requisição ao servidor!"
            }
        };
    }
}


export async function deleteEntity({ header, id }: DeleteRegisterRequest): Promise<DeleteRegisterResponse> {
    const response = await deleteRegister({
        id,
        header,
        resource: baseURL,
        translateMessage: translateMessage,
    });

    return response;
}

export async function createOrUpdateEntity({ data, token }: CreateOrUpdateRegisterDTO<PartnerCategory>): Promise<GetRegisterResponse<PartnerCategory>> {
    const response = await createOrUpdateRegister({
        data,
        header: {
            token
        },
        resource: baseURL,
        translateMessage: translateMessage
    });

    return response;
}