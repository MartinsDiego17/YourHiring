import { getPostulations } from "./getPostulations";

interface Postulacion {
    id: string;
    brandName: string;
    link: string;
    typeJob: string;
    date: {
        day: string;
        month: string;
        year: string;
    };
    mode: string;
    state: string;
    salary: number;
    location: string;
    observations: string;
}

export const filterPostulations = (value: string, oper: string) => {

    const postulations = getPostulations();
    let filtereds: Postulacion[] = [];

    if (oper === "charge") {
        filtereds = postulations.filter(post => post.typeJob === value);
    }
    else if (oper === "state") {
        filtereds = postulations.filter(post => post.state === value);
    }

    return filtereds;

};