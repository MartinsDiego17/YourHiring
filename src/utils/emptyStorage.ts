export const emptyStorage = () => {
    const newPostulations = localStorage.setItem('postulations', JSON.stringify([]));
    return newPostulations;
};