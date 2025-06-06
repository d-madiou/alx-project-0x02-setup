// let's create cardProps interface
export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps{
    onclick?:() => void;
    label: string;
    size?: "small" | "medium" | "large";
    shape?:  "rounded-sm" | "rounded-md" | "rounded-full";
}
export interface PostProps{
    title: string;
    content: string;
    userId: number;
}
// interfaces/index.ts
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
