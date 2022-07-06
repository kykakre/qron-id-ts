export interface IAccountInfo {
  personInfo: IPersonInfo;
  autorize: IAutorize;
  verify: IVerify;
  update: IUpdate;
}

export interface IPersonInfo {
  firstName: string;
  lastName: string;
  patronymic: string;
  phone: string;
  email: string;
  registrationDate: string;
  birhtDay: string;
}
export interface IAutorize {
  login: string;
  password: string;
  oneTimePasswordId: string;
  clientId: string;
}
export interface IVerify {
  clientId: number;
  oneTimePasswordIs: number;
  oneTimePassword: string;
}
export interface IUpdate {
  firstName: string;
  lastName: string;
  patronymic: string;
  birhtDay: string;
  phone: string;
  email: string;
}
export interface IRegistration {
  errorMessage: string;
  status: string;
}
export interface IGetStatus {
  errorMessage: string;
  login: string;
  email: string;
  name: string;
  state: boolean;
  surName: string;
  middleName: string;
  userToken: string;
}
