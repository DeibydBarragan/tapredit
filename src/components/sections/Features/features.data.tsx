import { Feature } from "@/components/containers/featureCard/interfaces";
import { HiOutlineAcademicCap, HiOutlinePuzzle } from 'react-icons/hi';
import { MdOutlineScience } from 'react-icons/md';

export const featuresData: Feature[] = [
  {
    title: 'Diseño didáctico',
    description: 'Se trata de una tabla periódica en forma de maletín con divisiones y repisas que imitan la estructura de una tabla periódica estándar',
    icon: <HiOutlinePuzzle />
  },
  {
    title: 'Ideal para instituciones educativas',
    description: 'El producto está diseñado pensando en su utilidad en diferentes instituciones educativas, ayudando a fortalecer las destrezas de los estudiantes en el estudio de la tabla periódica y la química',
    icon: <HiOutlineAcademicCap />
  },
  {
    title: 'Cubos de elementos',
    description: 'Los cubos que representan cada uno de los elementos están hechos de polipropileno recuperado, lo que los hace resistentes y sostenibles',
    icon: <MdOutlineScience />
  }
]