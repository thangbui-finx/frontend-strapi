import getBanners from "./src/apis/banners/getBanners";
import Banner from "./src/components/layout/Banner";
import Navbar from "./src/components/layout/Navbar";
import { fetchAPI } from "./src/libs/api";

export default async function Home() {
  const restaurantsData = await fetchAPI("/api/restaurants?populate=thumbnail");
  const banners = await getBanners();
  return (
    <div>
      <Navbar />
      <Banner banners={banners} />
    </div>
  );
}
