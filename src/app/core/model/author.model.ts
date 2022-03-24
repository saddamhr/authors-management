export interface Author {
  link: string;
  bio: string;
  description: string;
  _id: string;
  name: string;
  quoteCount: string;
  slug: string;
  dateAdded: string;
  dateModified: string;
}


export interface Data {
  count: number;
  lastItemIndex: number;
  page: number;
  results: Author[]
  totalCount: number;
  totalPages: number;
}
