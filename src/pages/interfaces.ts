export type FormElement = {
    id: string;
    placeholder?: string;
    required?: boolean;
    type: string;
    options?: string[];
  };
  
export type FormData = (FormElement[] | FormElement)[];
  