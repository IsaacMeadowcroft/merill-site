export type TShopItem = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

export type TCartItem = {
  id: number;
  size: Size;
}

export enum Size {
  SMALL,
  MEDIUM,
  LARGE
}

export interface IWindowProps {
  dimensions: { height: number, width: number };
  scrollPosition: number;
}

export interface IWindowShopProps extends IWindowProps {
  shopItems: TShopItem[] | undefined;
}

export interface IWindowCartProps extends IWindowProps {
  cartItems: Map<string, number>;
}

export interface IShopItemProps extends IWindowProps {
  shopItem: TShopItem;
  addCartItem: (id: number, size: Size) => void;
  minusCartItem: (id: number, size: Size) => void;
  removeCartItem: (id: number, size: Size) => void;
}

export interface ICartItemProps extends IWindowProps, IWindowShopProps {
  quantity: number;
  cartItem: TCartItem;
  addCartItem: (id: number, size: Size) => void;
  minusCartItem: (id: number, size: Size) => void;
  removeCartItem: (id: number, size: Size) => void;
}

export interface IWindowShopCartProps extends IWindowShopProps, IWindowCartProps {
  addCartItem: (id: number, size: Size) => void;
  minusCartItem: (id: number, size: Size) => void;
  removeCartItem: (id: number, size: Size) => void;
}

export const US_STATES = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

export const CA_PROVINCES = ['AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];


