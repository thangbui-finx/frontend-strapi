import Banner from "./src/components/layout/Banner";
import Navbar from "./src/components/layout/Navbar";
import { fetchAPI } from "./src/libs/api";

export default async function Home() {
  const restaurantsData = await fetchAPI("/api/restaurants?populate=thumbnail");
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}
