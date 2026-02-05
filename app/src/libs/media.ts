export function getStrapiMedia(url: string) {
    if(!url) return '';
    return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${url}`;
}