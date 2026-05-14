export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
  targetCategory: string;
}

export interface GalleryItem {
  id: string;
  category: 'Weddings' | 'Pre-Wedding' | 'Baby' | 'Maternity';
  imageUrl: string;
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  partner?: string;
  review: string;
  imageUrl?: string;
}

export interface FeaturedWork {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}
