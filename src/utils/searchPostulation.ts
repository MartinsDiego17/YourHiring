import { getPostulations } from "./getPostulations"

interface Postulacion {
    id: string
    brandName: string
    link: string
    typeJob: string
    date: {
        day: string
        month: string
        year: string
    }
    mode: string
    state: string
    salary: number
    location: string
    observations: string
};
export const searchPostulation = (letters: string): Postulacion[] => {
    const existentPostulations: Postulacion[] = getPostulations();
    const normalizedLetters = letters.toLowerCase().trim().replace(/\s+/g, ' ');

    const foundedPost: Postulacion[] = existentPostulations.filter((exist) => {
        const normalizedBrandName = exist.brandName.toLowerCase().trim().replace(/\s+/g, ' ');
        return normalizedBrandName.includes(normalizedLetters);
    });

    return foundedPost;
};
