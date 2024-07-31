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

export const updateStorage = (postulation: Postulacion) => {
    let postulations: Postulacion[] = JSON.parse(localStorage.getItem('postulations') || '[]');
    postulation.id = String(postulations.length + 1);
    postulations.push(postulation);
    localStorage.setItem('postulations', JSON.stringify(postulations));
};