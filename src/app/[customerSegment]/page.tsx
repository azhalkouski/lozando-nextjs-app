import type { Metadata } from 'next';
import { ProductT, CustomerSegmentT, GenderT } from '../types';
import { fetchProducts } from '../api/products';
import { genderByCustomerSegment } from "../utils/routeSegmentsMappings";
import { getPageTitle } from "../utils/pageUtils";


type Props = {
  params: Promise<{
    customerSegment: CustomerSegmentT;
  }>;
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const { customerSegment } = await params;
  const title = getPageTitle(customerSegment);

  return {
    title: title,
  }
};


/**
 * Data fetching goes here.
 * Reacting on query params and re-fetching here
 * 
 * So, effectively, on Page level:
 * - serach field fetch is handled
 * - filters are handled
 */
export default async function CustomerSegmentHome({ params }: Props) {
  const { customerSegment: _customerSegment } = await params;
  const customerSegment = _customerSegment.toString() as CustomerSegmentT;

  const gender: GenderT = genderByCustomerSegment[customerSegment];
  const products: ProductT[] = await fetchProducts({gender});

  return (
    <>
      <section>
        <h2>Products</h2>
        {products.map(({articleNumber, brand, name, purchasePrice}) => (
          <div key={articleNumber}>
            <p>{articleNumber} {brand} {name} {purchasePrice}</p>
          </div>
        ))}
      </section>

    </>
  );
}

