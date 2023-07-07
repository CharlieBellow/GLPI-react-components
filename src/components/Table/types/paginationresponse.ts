import { ServerError } from "@/exceptions/ServerError";

export interface PaginationResponse<T> {
    totalCount: number;
    data: T[];
    error?: ServerError;
}
