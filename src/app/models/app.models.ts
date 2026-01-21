export type UserRole = 'guest' | 'authenticated' | 'admin';

export interface Usuario {
  id: string;
  nombre: string;
  email?: string;
  avatarUrl?: string;
  role: UserRole;
}

export interface Articulo {
  id: string;
  titulo: string;
  resumen?: string;
  contenido: string;
  imagenUrl?: string;
  autorNombre?: string;
  categoria?: string;
  fechaPublicacion: string;
  likesCount: number;
  shareUrl?: string;
}

export interface Libro {
  id: string;
  titulo: string;
  imagenUrl: string;
  enlaceExterno?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  reflection: string;
  externalUrl: string;
  date: string;
}

export interface Video {
  id: string;
  titulo: string;
  descripcion?: string;
  youtubeId: string;
  embedUrl: string;
  thumbnailUrl?: string;
  fechaPublicacion: string;
}

export interface Opinion {
  id: string;
  titulo: string;
  contenido: string;
  fechaPublicacion: string;
  autorNombre: string;
  likesCount: number;
  shareUrl?: string;
}
