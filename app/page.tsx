import { getPromotion } from "./src/apis/promotion/getPromotion";
import Banner from "./src/components/layout/Banner";
import Navbar from "./src/components/layout/Navbar";
import PromotionFilterSidebar from "./src/components/promotion/PromotionFilterSidebar";
import PromotionList from "./src/components/promotion/PromotionList";

type Props = {
  searchParams: Promise<{
    categories?: string;
    partners?: string;
    customer_groups?: string;
    products?: string;
  }>;
};
export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  console.log("page.tsx searchParams:", params);
  const res = await getPromotion({
    categories: params.categories,
    partners: params.partners,
    customer_groups: params.customer_groups,
    products: params.products,
  });
  console.log("page.tsx res:", res);
  return (
    <div>
      <Navbar />
      <Banner />
      <main className="grid grid-cols-4 gap-6 p-12 pt-10 bg-white">
        <div className="col-span-1">
          <PromotionFilterSidebar />
        </div>
        <div className="col-span-3">
          <PromotionList promotions={res} />
        </div>
      </main>
    </div>
  );
}
