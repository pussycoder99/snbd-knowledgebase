export interface Category {
  id: number;
  slug: string;
  name: string;
  icon: string; // SVG path data
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  category_id: number;
  tags: string[];
  body_html: string;
  updated_on: string; // "YYYY-MM-DD"
  popular: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}
