export interface Student {
  id: number;
  name: string;
  photo: string;
  role?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  caption: string;
}
