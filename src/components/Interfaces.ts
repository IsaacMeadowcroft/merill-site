export type ShopItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export interface CartItem {
  id: number;
  size: number;
}

export interface IWindowProps {
  dimensions: { height: number, width: number };
  scrollPosition: number;
}

export interface IWindowDataProps {
  dimensions: { height: number, width: number };
  scrollPosition: number;
  data: ShopItemType[] | undefined;
}

export interface IShopItemProps extends IWindowProps {
  item: ShopItemType;
}