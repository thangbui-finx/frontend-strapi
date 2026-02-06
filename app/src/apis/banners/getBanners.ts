export default async function getBanners() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${API_URL}/api/banner-promotions?populate=image&filters[isActive][$eq]=true&sort=order:asc`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Faild to fecth banners");
  }
  const data = await res.json();
  console.log("Data banner", data.data);
  return data.data;
}
