export interface FormTypes {
  username: string;
  email: string;
  password: string;
  repeatPassword?: string;
  id?: string;
}

export interface DataTypes {
  question: string;
  options: string[];
  answer: string;
}
