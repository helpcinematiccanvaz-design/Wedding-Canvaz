import { Service, GalleryItem, Testimonial, FeaturedWork, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Cinematic Wedding Photography',
    description: 'Capturing the essence of your love story with a cinematic touch, focusing on emotions and grand moments.',
    iconName: 'Camera',
    imageUrl: '/service-cinematic.jpeg',
    targetCategory: 'Weddings',
  },
  {
    id: '2',
    title: 'Candid Photography',
    description: 'Unscripted, raw, and beautiful moments that define the soul of your wedding day.',
    iconName: 'Heart',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    targetCategory: 'Weddings',
  },
  {
    id: '3',
    title: 'Pre-Wedding Shoots',
    description: 'A romantic journey before the big day, set in breathtaking locations that reflect your personalities.',
    iconName: 'Image',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800',
    targetCategory: 'Pre-Wedding',
  },
  {
    id: '4',
    title: 'Wedding Films',
    description: 'Moving stories told through cinematic lenses, preserving the sounds and rhythms of your celebration.',
    iconName: 'Video',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800',
    targetCategory: 'Weddings',
  },
  {
    id: '5',
    title: 'Maternity & Baby Shoots',
    description: 'Celebrating the beginning of a new chapter with soft, ethereal, and precious captures.',
    iconName: 'Baby',
    imageUrl: 'https://images.unsplash.com/photo-1519225495042-35aeae04c9c0?auto=format&fit=crop&q=80&w=800',
    targetCategory: 'Baby',
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: '1',
    category: 'Weddings',
    title: 'The Palace Vows',
    imageUrl: '/about-image.jpeg',
  },
  {
    id: '2',
    category: 'Weddings',
    title: 'Golden Hour Love',
    imageUrl: '/hero-wedding.jpeg',
  },
  {
    id: '3',
    category: 'Pre-Wedding',
    title: 'Desert Romance',
    imageUrl: '/service-cinematic.jpeg',
  },
  {
    id: '4',
    category: 'Maternity',
    title: 'New Beginnings',
    imageUrl: 'https://images.unsplash.com/photo-1519225495042-35aeae04c9c0?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '5',
    category: 'Baby',
    title: 'Tiny Wonders',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '6',
    category: 'Weddings',
    title: 'Modern Classic',
    imageUrl: '/hero-mobile.jpeg',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Anya',
    partner: 'Rohan',
    review: "Wedding Canvaz captured our wedding more beautifully than we could have ever imagined. Every time we look at our photos, we relive the emotions.",
    imageUrl: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    name: 'Elena',
    partner: 'Marco',
    review: "Their eye for detail and ability to capture candid moments is unmatched. They weren't just photographers; they were storytellers.",
    imageUrl: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    name: 'Sarah',
    partner: 'David',
    review: "The cinematic feel of our wedding film left us speechless. Professional, warm, and exceptionally talented team.",
    imageUrl: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80&w=200',
  },
];

export const FEATURED_WORK: FeaturedWork[] = [
  {
    id: '1',
    title: 'Lake Como Elopement',
    slug: 'lake-como-elopement',
    description: 'An intimate celebration of love amidst the serene waters and classic architecture of Italy.',
    imageUrl: '/hero-wedding.jpeg',
  },
  {
    id: '2',
    title: 'Urban Chic in Manhattan',
    slug: 'urban-chic-manhattan',
    description: 'A modern, high-fashion wedding story captured in the heart of New York City.',
    imageUrl: '/service-cinematic.jpeg',
  },
  {
    id: '3',
    title: 'Traditional Grandeur',
    slug: 'traditional-grandeur',
    description: 'A majestic celebration full of rich rituals, vibrant colors, and timeless traditions.',
    imageUrl: '/about-image.jpeg',
  },
];

export const PROCESS: ProcessStep[] = [
  {
    id: 1,
    title: 'Initial Inquiry',
    description: 'We start with a conversation to understand your vision, style, and requirements.',
  },
  {
    id: 2,
    title: 'Planning & Vision',
    description: 'We collaborate to plan the perfect shoot, locations, and storytelling approach.',
  },
  {
    id: 3,
    title: 'The Celebration',
    description: "Our team captures your day with a mix of cinematic shots and candid moments.",
  },
  {
    id: 4,
    title: 'Timeless Delivery',
    description: 'Meticulously edited visuals delivered in a premium gallery for you to cherish forever.',
  },
];
