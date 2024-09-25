export type LoginRequest = {
  userLogin: string;
  password: string;
  twoFactorCode: string;
  twoFactorRecoveryCode: string;
  useCookies: boolean;
  useSessionCookies: boolean;
  serviceProvider: any;
};
