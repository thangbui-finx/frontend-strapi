export default async function getPartners() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/partners?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch partners");
  }
  const data = await res.json();
  return data.data;
}
