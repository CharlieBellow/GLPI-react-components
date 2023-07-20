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
