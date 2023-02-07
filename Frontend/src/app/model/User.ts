export interface UserForRegister {
  Name: string;
  Email?: string;
  Password: string;
  Mobile?: number;
}

export interface UserForLogin{
  Name: string;
  Password: string;
  Token: string;
}
