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

type DateObject = {
    day: string;
    month: string;
    year: string;
};

const formatDate = (dateObj: DateObject): Date => {
    const { day, month, year } = dateObj;

    const date = new Date(
        parseInt(year, 10),
        parseInt(month, 10) - 1,
        parseInt(day, 10)
    );

    return date;
};

export const sortPostulations = (oper: string): Postulacion[] => {
    const postulations: Postulacion[] = getPostulations();

    let sorteredPostulations: Postulacion[] = [];

    if (oper === "Más reciente") sorteredPostulations = postulations.sort((a, b) => formatDate(b.date).getTime() - formatDate(a.date).getTime());

    else if (oper === "Más antigua") sorteredPostulations = postulations.sort((a, b) => formatDate(a.date).getTime() - formatDate(b.date).getTime()); 

    else sorteredPostulations = postulations;

    return sorteredPostulations;
};
