export interface Branch {
  name: string;
  address: string;
  phone: string;
}

export interface MenuItem {
  name: string;
  price: string;
  desc: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}