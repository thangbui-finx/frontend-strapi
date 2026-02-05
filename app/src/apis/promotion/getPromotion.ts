const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getPromotion() {
  const res = await fetch(`${API_URL}/api/promotions?populate=*`);
  if (!res.ok) {
    throw new Error("Failed to fetch promotion data");
  }
  const data = await res.json();
  return data.data;
}
