import getBanners from "./src/apis/banners/getBanners";
import { getPromotion } from "./src/apis/promotion/getPromotion";

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
  return <div> </div>;
}
