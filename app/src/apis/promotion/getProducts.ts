export default async function getProducts() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/products?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Lỗi fetch products");
  }
  const data = await res.json();
  return data.data;
}
