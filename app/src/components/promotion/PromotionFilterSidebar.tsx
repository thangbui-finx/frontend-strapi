import FilterGroup from "./FilterPromotion/FilterGroup";
import getCategories from "../../apis/promotion/getCategories";
import getCustomerGroup from "../../apis/promotion/getCustomerGroup";
import getLocation from "../../apis/promotion/getLocation";
import getPartners from "../../apis/promotion/getPartners";
import getProducts from "../../apis/promotion/getProducts";

export default async function PromotionFilterSidebar() {
  const categories = await getCategories();
  const customerGroup = await getCustomerGroup();
  const locations = await getLocation();
  const partners = await getPartners();
  const products = await getProducts();

  return (
    <aside className="flex gap-10 flex-col">
      <FilterGroup title="Sản phẩm" items={products} />
      <FilterGroup title="Phân loại" items={categories} />
      <FilterGroup title="Nhóm khách hàng" items={customerGroup} />
      <FilterGroup title="Địa điểm" items={locations} />
      <FilterGroup title="Đối tác" items={partners} />
    </aside>
  );
}
