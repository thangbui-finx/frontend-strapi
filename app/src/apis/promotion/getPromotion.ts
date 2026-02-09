const API_URL = process.env.NEXT_PUBLIC_API_URL;
type Params = {
  categories?: string;
  partners?: string;
  customer_groups?: string;
  products?: string;
  search?: string;
};
export async function getPromotion(param?: Params) {
  const query = new URLSearchParams();
  if (param?.search) {
    query.append("filters[title][$containsi]", param.search);
  }
  query.append("populate", "*");
  if (param?.categories) {
    const ids = param.categories.split(",");
    ids.forEach((id) => {
      query.append("filters[categories][id][$in]", id);
    });
  }
  if (param?.partners) {
    query.append("filters[partners][id][$in]", param.partners);
  }
  if (param?.customer_groups) {
    query.append("filters[customer_groups][id][$in]", param.customer_groups);
  }
  if (param?.products) {
    const ids = param.products.split(",");
    ids.forEach((id) => {
      query.append("filters[products][id][$in]", id);
    });
  }
  console.log(`${API_URL}/api/promotions?${query.toString()}`);
  const res = await fetch(`${API_URL}/api/promotions?${query.toString()}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
}
