import { Challenge } from "src/app/shared/interfaces/Challenge"




export const challengesMock: Challenge[] = [
  {
    id: '1',
    title: 'Crear una nueva página web',
    description: 'Crea una página web desde cero utilizando React y TypeScript.',
    icon: '',
    isAdmin: false,
    category: 'Frontend',
    pointsReward: 100,
    startDate: new Date(2023, 9, 29),
    endDate: new Date(2023, 10, 29),
    company: 'Smart4Play',
    isUrgent: false
  },
  {
    id: '2',
    title: 'Construir una aplicación móvil',
    description: 'Desarrolla una aplicación móvil para iOS y Android utilizando React Native.',
    icon: '',
    isAdmin: false,
    category: 'Mobile',
    pointsReward: 200,
    startDate: new Date(2023, 9, 29),
    endDate: new Date(2023, 11, 29),
    company:'ProfilePlay',
    isUrgent: true
  },
  {
    id: '3',
    title: 'Crear una API REST',
    description: 'Construye una API REST utilizando Node.js y Express.',
    icon: '',
    isAdmin: false,
    category: 'Backend',
    pointsReward: 300,
    startDate: new Date(2023, 9, 29),
    endDate: new Date(2023, 12, 29),
    company:'ProfilePlay',
    isUrgent: false
  },
  {
    id: '4',
    title: 'Implementar una base de datos',
    description: 'Configura una base de datos relacional o NoSQL para tu aplicación.',
    icon: '',
    isAdmin: false,
    category: 'Data',
    pointsReward: 400,
    startDate: new Date(2023, 9, 29),
    endDate: new Date(2023, 1, 29),
    company:'ProfilePlay',
    isUrgent: true
  },
  {
    id: '5',
    title: 'Desarrollar una prueba unitaria',
    description: 'Crea una prueba unitaria para tu código utilizando Jest o Mocha.',
    icon: '',
    isAdmin: false,
    category: 'Testing',
    pointsReward: 500,
    startDate: new Date(2023, 9, 29),
    endDate: new Date(2023, 2, 29),
    company: 'Smart4Play',
    isUrgent: false
  },
  {
    id: '6',
    title: 'Implementar una integración continua',
    description: 'Configura una CI/CD para tu aplicación utilizando Jenkins o Travis CI.',
    icon: '',
    isAdmin: false,
    category: 'Deployment',
    pointsReward: 600,
    startDate: new Date(2023, 9, 29),
    endDate: new Date(2023, 3, 29),
    company: 'Smart4Play',
    isUrgent: false
  },
  {
    id: '7',
    title: 'Publicar tu aplicación',
    description: 'Publica tu aplicación en un repositorio público o en un marketplace.',
    icon: '',
    category: 'Writer',
    company:'ProfilePlay',
    isUrgent: false
  },
  {
    id: '8',
    title: 'Promover tu aplicación',
    description: 'Promociona tu aplicación a través de las redes sociales, blogs y otros canales.',
    icon: '',
    category: 'Writer',
    company:'ProfilePlay',
    isUrgent: false
  },
  {
    id: '9',
    title: 'Obtener comentarios de los usuarios',
    description: 'Obtén comentarios de los usuarios para mejorar tu aplicación.',
    icon: '',
    category: 'Writer',
    company: 'Smart4Play',
    isUrgent: false
  },
  {
    id: '10',
    title: 'Lanzar una nueva versión',
    description: 'Lanzamiento una nueva versión de tu aplicación con nuevas características y mejoras.',
    icon: '',
    category: 'Writer',
    company: 'Smart4Play',
    isUrgent: true
  },
  {
    id: '11',
    title: 'Escribir post: Implementación de pipelines de datos con Apache Kafka',
    description: 'Como ejemplo, podemos pensar en las APIs de ingesta para obtener los datos. Esta API es el punto de partida, y podría enviar los datos a un topic de Apache Kafka.',
    icon: '',
    category: 'Writer',
    company:'ProfilePlay',
    isUrgent: false
  }
];
