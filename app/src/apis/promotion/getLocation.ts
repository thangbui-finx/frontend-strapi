export default async function getLocation() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/locations?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch locations");
  }
  const data = await res.json();
  return data.data;
}
