import { getPostulations } from "./getPostulations";

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

export const deletePostulation = (id: String): Postulacion[] => {

    const postulations = getPostulations();
    console.log(postulations.length);
    const newPostulations: Postulacion[] = postulations.filter(post => post.id !== id);
    localStorage.setItem('postulations', JSON.stringify(newPostulations));

    console.log(id);
    console.log(newPostulations.length);

    return newPostulations;

};