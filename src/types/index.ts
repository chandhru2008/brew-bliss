export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}