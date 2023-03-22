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

export interface ServiceOrder {
	id: string;
	status: string;
	description: string;
	patrimonyId: string;
	estimatedAt: Date;
	closedAt: Date;
	createdAt: Date;
	updatedAt: Date;
	responsibleId: string,
	requesterId: string,
	serviceId: string,
	service: Service
}

export interface User {
	id: string;
	name: string;
	password: string;
	email: string;
	avatar: any;
	isAdmin: boolean;
	created_at: string;
	permissions: Array<any>;
	roles: Array<any>;
	
}