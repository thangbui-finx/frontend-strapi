import getBanners from "./src/apis/banners/getBanners";
import { getPromotion } from "./src/apis/promotion/getPromotion";
import Banner from "./src/components/layout/Banner";
import Footer from "./src/components/layout/Footer";
import Navbar from "./src/components/layout/Navbar";
import PromotionFilterSidebar from "./src/components/promotion/PromotionFilterSidebar";
import PromotionList from "./src/components/promotion/PromotionList";

type Props = {
  searchParams: Promise<{
    categories?: string;
    partners?: string;
    customer_groups?: string;
  }>;
};
export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  console.log("page.tsx searchParams:", params);
  const banners = await getBanners();
  const res = await getPromotion({
    categories: params.categories,
    partners: params.partners,
    customer_groups: params.customer_groups,
  });
  console.log("page.tsx res:", res);
  return (
    <div>
      <Navbar />
      <Banner banner={banners} />
      <main className="grid grid-cols-4 gap-6 p-12 pt-10 bg-gray-100">
        <div className="col-span-1">
          <PromotionFilterSidebar />
        </div>
        <div className="col-span-3">
          <PromotionList promotions={res} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
