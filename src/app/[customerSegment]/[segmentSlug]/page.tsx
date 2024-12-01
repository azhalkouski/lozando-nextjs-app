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


type Props = {
  params: Promise<{
    customerSegment: string;
    segmentSlug: string;
  }>;
}

const homeHeaderTitles: { [key in CustomerSegmentT]: string } = {
  "women": "Women Home",
  "men": "Men Home"
};


export default async function SegmentSlugPage({ params }: Props) {
  const { customerSegment: _customerSegment, segmentSlug: _segmentSlug } = await params;
  const customerSegment = _customerSegment.toString() as CustomerSegmentT;
  const segmentSlug = _segmentSlug.toString() as CustomerSegmentSlugT;

  // ? if customerSegment not recognized then redirect to 404 ?
// ! ./pageUtils.ts
  const headerTitle = customerSegment in homeHeaderTitles
    ? homeHeaderTitles[customerSegment]
    : '';

  if (headerTitle === '') {
    // TODO: logger.warn(`homeHeaderTitles dosn't have a title for customerSegment "${customerSegment}".`);
    console.log(`homeHeaderTitles dosn't have a title for customerSegment "${customerSegment}".`);
  }



  const gender: GenderT = genderByCustomerSegment[customerSegment];
  const categoryGroup: CategoryGroupT = categoryGroupBySegmentSlug[segmentSlug];
  const products: ProductT[] = await fetchProducts({gender, categoryGroup});



  return (
    <>
      <header>
        <h1>{headerTitle}</h1>
      </header>
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

