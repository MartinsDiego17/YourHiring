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

export const getPostulations = () => {
    const postulations : Postulacion[] = JSON.parse(localStorage.getItem('postulations') || '[]');
    return postulations;
};