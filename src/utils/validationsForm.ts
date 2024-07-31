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

export const validationsForm = (postulation: Postulacion): boolean => {

    const keys = Object.keys(postulation);
    const values = Object.values(postulation);
    let hasError = true;
    let stop = 0;

    values.forEach((value, index) => {
        const currentKey = keys[index];

        if (!stop) {
            if (currentKey !== "salary" && currentKey !== "location" &&
                currentKey !== "observations" && currentKey !== "date") {
                if (!value.length) {
                    hasError = true;
                    stop = 1;
                }
                else hasError = false;
            }
            else if (currentKey === "date") {
                const valuesDate = Object.values(postulation.date);

                valuesDate.forEach(valueDate => {
                    if (!valueDate.length) hasError = true;
                    else hasError = false;
                });
            }
        }

    });

    return hasError;
};