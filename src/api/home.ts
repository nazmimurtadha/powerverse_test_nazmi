export const getMovieList = async (title: string) => {
    try {
        const url = 'https://freetestapi.com/api/v1/movies'
        const search = title ? `?search=${encodeURIComponent(title)}` : '';
        const response = await fetch(`${url}${search}`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};