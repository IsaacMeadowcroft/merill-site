export type ShopItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export enum Size {
  SMALL,
  MEDIUM,
  LARGE
}

export type CartItem = {
  id: number;
  size: Size;
}

export interface IWindowProps {
  dimensions: { height: number, width: number };
  scrollPosition: number;
}

export interface IWindowShopProps extends IWindowProps {
  shopItems: ShopItemType[] | undefined;
}

export interface IWindowCartProps extends IWindowProps {
  cartItems: Map<CartItem, number>;
}

export interface IShopItemProps extends IWindowProps {
  shopItem: ShopItemType;
  addCartItem: (id: number, size: Size) => void;
  removeCartItem: (id: number, size: Size) => void;
}

export interface IWindowShopCartProps extends IWindowShopProps, IWindowCartProps {
  addCartItem: (id: number, size: Size) => void;
  removeCartItem: (id: number, size: Size) => void;
}
