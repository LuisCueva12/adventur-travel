const SHEET_ENDPOINT = process.env.NEXT_PUBLIC_SHEET_ENDPOINT;

export const getAlojamientos = async () => {
    try {
        const response = await fetch(SHEET_ENDPOINT!);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('[getAlojamientos]', error);
        return [];
    }
};
