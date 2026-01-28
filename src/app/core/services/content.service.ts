import { Injectable } from '@angular/core';

import { Articulo, Book } from '../../models/app.models';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  getArticulos(): Articulo[] {
    return [
      {
        id: 'art-hero',
        titulo: 'El nuevo mapa energético en América Latina',
        resumen:
          'Claves geopolíticas y sociales que definen la próxima década para la región.',
        contenido:
          'Un análisis profundo sobre el reordenamiento de los recursos energéticos.',
        imagenUrl:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
        autorNombre: 'Doug Stokes',
        categoria: 'Política',
        fechaPublicacion: '2024-06-14',
        likesCount: 128,
      },
      {
        id: 'art-1',
        titulo: 'La innovación urbana que redefine el transporte público',
        contenido:
          'Modelos híbridos y sostenibles que transforman la movilidad.',
        autorNombre: 'Sam Leith',
        categoria: 'Ciudades',
        fechaPublicacion: '2024-06-13',
        likesCount: 64,
      },
      {
        id: 'art-2',
        titulo: 'Educación digital: retos y oportunidades en 2024',
        contenido: 'La nueva agenda digital para docentes y estudiantes.',
        autorNombre: 'Stephen Pollard',
        categoria: 'Educación',
        fechaPublicacion: '2024-06-12',
        likesCount: 71,
      },
      {
        id: 'art-3',
        titulo: 'Cultura y memoria: archivos que cuentan la región',
        contenido: 'Proyectos que preservan el patrimonio cultural latinoamericano.',
        autorNombre: 'Gavin Mortimer',
        categoria: 'Cultura',
        fechaPublicacion: '2024-06-11',
        likesCount: 58,
      },
      {
        id: 'art-4',
        titulo: 'Salud pública y datos abiertos: una alianza estratégica',
        contenido:
          'Cómo los datos abiertos impulsan nuevas políticas de prevención.',
        autorNombre: 'Ed West',
        categoria: 'Salud',
        fechaPublicacion: '2024-06-10',
        likesCount: 43,
      },
    ];
  }

  getBooks(): Book[] {
    return [
      {
        id: 'book-1',
        title: 'Hábitos Atómicos',
        author: 'James Clear',
        coverUrl:
          'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
        reflection:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        externalUrl: 'https://www.goodreads.com/book/show/40121378-atomic-habits',
        date: 'Hoy',
      },
      {
        id: 'book-2',
        title: 'El cuerpo lleva la cuenta',
        author: 'Bessel van der Kolk',
        coverUrl:
          'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
        reflection:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        externalUrl: 'https://www.goodreads.com/book/show/18693771-the-body-keeps-the-score',
        date: '2 ene 2026',
      },
      {
        id: 'book-3',
        title: 'Los cuatro acuerdos',
        author: 'Don Miguel Ruiz',
        coverUrl:
          'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
        reflection:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        externalUrl: 'https://www.goodreads.com/book/show/6596.The_Four_Agreements',
        date: '15 dic 2025',
      },
      {
        id: 'book-4',
        title: 'El poder del ahora',
        author: 'Eckhart Tolle',
        coverUrl:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        reflection:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
        externalUrl:
          'https://www.goodreads.com/book/show/6708.The_Power_of_Now',
        date: '28 nov 2025',
      },
      {
        id: 'book-5',
        title: 'El hombre en busca de sentido',
        author: 'Viktor E. Frankl',
        coverUrl:
          'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
        reflection:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
        externalUrl:
          'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning',
        date: '10 nov 2025',
      },
      {
        id: 'book-6',
        title: 'Sapiens: De animales a dioses',
        author: 'Yuval Noah Harari',
        coverUrl:
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
        reflection:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate.',
        externalUrl: 'https://www.goodreads.com/book/show/23692271-sapiens',
        date: '05 nov 2025',
      },
    ];
  }

  getVideos(): any[] {
    return [
      {
        id: 'vid-1',
        titulo: 'Entendiendo el trauma generacional',
        thumbnailUrl: 'https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=800&q=80',
        youtubeId: 'dQw4w9WgXcQ',
        fechaPublicacion: 'Hace 3 días',
      },
      {
        id: 'vid-2',
        titulo: '5 ejercicios de respiración',
        thumbnailUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        youtubeId: 'dQw4w9WgXcQ',
        fechaPublicacion: 'Hace 1 semana',
      }
    ];
  }

  getOpiniones(): any[] {
    return [
      {
        id: 'op-1',
        titulo: 'La importancia de la vulnerabilidad',
        autorNombre: 'Karla Jara',
        fechaPublicacion: '24 Ene 2026',
        resumen: 'Aprender a mostrarse tal como uno es es el primer paso para sanar.',
        likesCount: 156,
      },
      {
        id: 'op-2',
        titulo: 'Reconectando con tu niño interior',
        autorNombre: 'Karla Jara',
        fechaPublicacion: '20 Ene 2026',
        resumen: 'Pequeñas acciones diarias que marcan la diferencia en tu bienestar.',
        likesCount: 89,
      }
    ];
  }
}
