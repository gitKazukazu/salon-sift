
export interface RecruitRequirement {
  title: string;
  body: string;
  isWarning?: boolean;
}

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
  label?: string;
  subtitle?: string;
  description?: string;
  recruitBadge?: string;
  businessHours?: string;
  holidays?: string;
  recruitRequirements?: RecruitRequirement[];
  facilities?: string[];
}


export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface BlogSection {
  heading: string;
  body: string;
}

export interface NewsPost {
  id: number;
  slug: string;
  date: string;
  category: string;
  title: string;
  imageUrl: string;
  profile?: string;
  schedule?: ScheduleItem[];
  reason?: string;
  message?: string;
  author?: string;
  readTime?: string;
  sections?: BlogSection[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
