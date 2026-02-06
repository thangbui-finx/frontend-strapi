export default async function getCustomerGroup() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/customer-groups?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch customer groups");
  }
  const data = await res.json();
  return data.data;
}
