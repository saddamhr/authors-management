export interface Xpos {
  key: string;
  id: number;
  value: string[];
}

export interface XposCategory {
  category_name: string;
  root: number;
  level: string;
}

export interface XposItem {
  name: string;
  price: number;
}

export interface demoItem {
  item_id: number;
  item_name: string;
  base_price: number;
  offer_end_date: string;
  offer_start_date: string;
  offer_end_time: string;
  offer_start_time: string;
  offer_price: number;
  thumbnail: string;
  max_sale_quantity: number;
  quantity: number;
  store_name: string;
}

// export interface userStatus {
//   name?: string;
//   isLoggedIn: boolean;
//   token?;
//   string;
// }

export interface ecomItem {
  ecomCategory?: string;
  xposItem?: string;
  displayName: string;
  thumbnail?: string;
  baseprice: number;
  quantity: number;
  offerprice?: number;
  offer?: string;
  offerStart?: Date;
  offerEnd?: Date;
  offerStock?: number;
}

export interface Demouser {
  name: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
  address?: string;
  phone: string;
  district?: string;
  city?: string;
  postcode?: string;
  gender?: string;
}

export interface EcomCategory {
  id: string;
  category_name: string;
  root: string;
  level: string;
  parent: string;
  children?: EcomCategory[];
}
export interface DemouserInShort {
  street_address: string;
  name: string;
  mobile: string;
  email: string;
  address: string;
  city: string;
  district: string;
  postcode: string;
  country: string;
  gender: string;
}

export interface UserProfile {
  name: string;
  mobile: string;
  email: string;
  city: string;
  district: string;
  postcode: string;
  country: string;
  gender: string;
  street_address: string;
}

export interface CartItems {
  item: demoItem;
  quantity: number;
  totalPrice: number;
}
