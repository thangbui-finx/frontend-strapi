import getBanners from "../app/src/apis/banners/getBanners";
import { getPromotion } from "../app/src/apis/promotion/getPromotion";
import MotionSection from "../app/src/components/effects/MotionSection";
import Banner from "../app/src/components/layout/Banner";
import Footer from "../app/src/components/layout/Footer/Footer";
import Navbar from "../app/src/components/layout/Navbar";
import PromotionFilterSidebar from "../app/src/components/promotion/FilterPromotion/PromotionFilterSidebar";
import PromotionList from "../app/src/components/promotion/ListPromotion/PromotionList";

type Props = {
  searchParams: Promise<{
    categories?: string;
    partners?: string;
    customer_groups?: string;
    products?: string;
    search?: string;
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
    products: params.products,
    search: params.search,
  });
  return (
    <div>
      <Banner banners={banners} />
      <main className="grid grid-cols-1 lg:grid-cols-4 p-4 gap-6 sm:p-6 lg:p-12 pt-10 bg-gray-100">
        <div className="lg:col-span-1">
          <MotionSection delay={0}>
            <PromotionFilterSidebar />
          </MotionSection>
        </div>
        <div className="lg:col-span-3">
          <MotionSection delay={0.1}>
            <PromotionList promotions={res} />
          </MotionSection>
        </div>
      </main>
    </div>
  );
}
