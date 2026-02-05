import Banner from "./src/components/layout/Banner";
import Footer from "./src/components/layout/Footer";
import Navbar from "./src/components/layout/Navbar";
import PromotionFilterSidebar from "./src/components/promotion/PromotionFilterSidebar";
import PromotionList from "./src/components/promotion/PromotionList";
import { fetchAPI } from "./src/libs/api";

export default async function Home() {
  const restaurantsData = await fetchAPI("/api/restaurants?populate=thumbnail");
  return (
    <div>
      <Navbar />
      <Banner />
      <main className="grid grid-cols-4 gap-6 p-12 pt-10 bg-gray-100">
        <div className="col-span-1">
          <PromotionFilterSidebar />
        </div>
        <div className="col-span-3">
          <PromotionList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
