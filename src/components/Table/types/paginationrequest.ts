export interface PaginationParamsRequest {
    sortType?: 'asc' | 'desc',
    column?: string,
    searchQuery?: string,
    skip?: number,
    take?: number,
}
export interface PaginationRequest {
    page: number;
    params: PaginationParamsRequest;
    token?: string;
}