export interface Service{
  id: string;
	description: string;
	title: string;
	definition: string;
	serviceSubGroupId: string;
	personType: Array<Object>;
	waitingTime: null | Date;
	deadline: null | Date;
	openningHours: null | Date;
	isPrioritaryService: boolean;
	serviceLocation: null | string;
	requiredDocuments: null | boolean;
	contactInfo: null | string;
	isPatromonyIdRequired: boolean;
	glpiSla: null;
	createdAt: Date;
	updatedAt: Date;
}
export interface Group {
	id: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
}
export interface SubGroup{
	id: string;
	description: string;
  serviceGroupId: string;
	createdAt: Date;
	updatedAt: Date;
}