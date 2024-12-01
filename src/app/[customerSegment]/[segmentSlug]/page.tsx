import type { Metadata } from 'next';
import {
  ProductT,
  CustomerSegmentT,
  CustomerSegmentSlugT,
  GenderT,
  CategoryGroupT,
} from '../../types';
import { fetchProducts } from "../../api/products";
import {
  genderByCustomerSegment,
  categoryGroupBySegmentSlug,
} from '@/app/utils/routeSegmentsMappings';
import { getPageTitle } from '@/app/utils/pageUtils';


type Props = {
  params: Promise<{
    customerSegment: CustomerSegmentT;
    segmentSlug: CustomerSegmentSlugT;
  }>;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const { customerSegment, segmentSlug } = await params;
  const title = getPageTitle(customerSegment, segmentSlug);

  return {
    title: title,
  }
};


export default async function SegmentSlugPage({ params }: Props) {
  const { customerSegment: _customerSegment, segmentSlug: _segmentSlug } = await params;
  const customerSegment = _customerSegment.toString() as CustomerSegmentT;
  const segmentSlug = _segmentSlug.toString() as CustomerSegmentSlugT;

  const gender: GenderT = genderByCustomerSegment[customerSegment];
  const categoryGroup: CategoryGroupT = categoryGroupBySegmentSlug[segmentSlug];
  const products: ProductT[] = await fetchProducts({gender, categoryGroup});

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

