import type { Image } from "./Image";

export interface HeroSection {
  documentId: string;
  badge: string;
  title: string;
  subtitle: string;
  contact: string;
  askPrice: string;
  backgroundImage: Image;
}
