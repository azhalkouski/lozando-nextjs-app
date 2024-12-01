import { ProductT, FetchProductsArgs } from "../types";

const API_KEY = process.env.LOZANDO_REST_API_KEY;
const BASE_API_URL = process.env.BASE_API_URL;

export async function fetchProducts({ gender, categoryGroup, isForKids = false }: FetchProductsArgs) {
  let products: ProductT[] = [];
  let url: string = '';

  try {
    let query = `?gender=${gender}&isForKids=${isForKids}`;

    if (categoryGroup) {
      query = `${query}&categoryGroup=${categoryGroup}`;
    }

    url = `${BASE_API_URL}/products${query}`;
    const response = await fetch(url, {
      headers: {
        'x-api-key': API_KEY as string,
      }
    });
    products = await response.json() as ProductT[];
  } catch(e) {
    // logger.error(`Failed to load resource: ${url}`);
    console.log(`Failed to load resource: ${url}`);
  }

  return products;
}
