export type UserModel = {
  id: string;
  email: string;
  name: string;
  roles: string[];
  permissions: string[];
  avatar?: string;
};

export type Token = {
  token: string;
  tokenExpiresIn: number;
  refresh_token: string;
  refreshTokenExpiresIn: number;
};

export type Group = {
  id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type SubGroupModel = {
  id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  serviceGroupId: string;
  person: {
    id: string;
    email: string;
  };
};

export interface Service {
  id: string;
  description: string;
  title: string;
  definition: string;
  serviceSubGroupId: string;
  personType: string;
  waitingTime: any;
  deadline: any;
  openningHours: any;
  isPrioritaryService: boolean;
  serviceLocation: any;
  requiredDocuments: any;
  contactInfo: any;
  isPatromonyIdRequired: boolean;
  glpiSla: any;
  createdAt: string;
  updatedAt: string;
}
