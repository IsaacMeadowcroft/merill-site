export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export interface IWindowProps {
    dimensions: {height: number, width: number };
    scrollPosition: number;
  }

export interface IShopItemProps extends IWindowProps{
    item: CartItemType;
}