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

export const updatePostulation = (postulation: Postulacion) => {
    let currentPostulations = getPostulations();
    currentPostulations = currentPostulations.filter(post => post.id !== postulation.id);
    currentPostulations.push(postulation);
    localStorage.setItem('postulations', JSON.stringify(currentPostulations));
};

