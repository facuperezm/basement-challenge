export interface Product {
  id: string;
  image: string;
  price: number;
  name: string;
  description: string;
  options: Option[];
}
export interface ProductCart extends Product {
  quantity: number;
  cartItemAmount?: string;
}

export interface Option {
  label: string;
  values: string[];
}
