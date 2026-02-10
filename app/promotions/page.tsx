import getBanners from "../src/apis/banners/getBanners";
import { getPromotion } from "../src/apis/promotion/getPromotion";
import MotionSection from "../src/components/effects/MotionSection";
import Banner from "../src/components/layout/Banner";
import PromotionFilterMobile from "../src/components/promotion/FilterMobile/PromotionFilterMobile";
import PromotionFilterSidebar from "../src/components/promotion/FilterPromotion/PromotionFilterSidebar";
import PromotionList from "../src/components/promotion/ListPromotion/PromotionList";

export default async function PromotionPage({ searchParams }: any) {
  const params = await searchParams;
  console.log("page.tsx searchParams:", params);
  const res = await getPromotion({
    categories: params.categories,
    partners: params.partners,
    customer_groups: params.customer_groups,
    products: params.products,
    search: params.search,
  });
  const banners = await getBanners();
  return (
    <div>
      <Banner banners={banners} />
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-12 pt-10 bg-gray-100">
        <div className="hidden lg:block lg:col-span-1">
          <MotionSection>
            <PromotionFilterSidebar />
          </MotionSection>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 space-y-4">
          <PromotionFilterMobile>
            <PromotionFilterSidebar />
          </PromotionFilterMobile>

          <MotionSection>
            <PromotionList promotions={res} />
          </MotionSection>
        </div>
      </main>
    </div>
  );
}
