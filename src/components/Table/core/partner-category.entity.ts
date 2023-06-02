export interface SubCategory {
  description: string;
}
export interface PartnerCategory {
  id: string;
  description: string;
  createdAt: string;
  subCategories?: SubCategory[]
}