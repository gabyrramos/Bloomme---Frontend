export interface ILogin{
  email: string;
  password: string;
};

export interface ILoginView{
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  onLogin: () => void;
};