
export interface SalonLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  imageUrl: string;
  city: string;
  links: {
    hotpepper?: string;
    beauty?: string;
  };
}

export interface NewsPost {
  id: number;
  date: string;
  category: string;
  title: string;
  imageUrl: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
