import { Injectable } from '@angular/core';

import { Articulo } from '../../models/app.models';

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
}
