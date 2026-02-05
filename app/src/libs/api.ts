const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
export async function fetchAPI(path: string) {
    const res = await fetch(`${API_URL}${path}`);
    return res.json();
}