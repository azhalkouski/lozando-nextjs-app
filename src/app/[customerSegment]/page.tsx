import { ProductT, CustomerSegmentT, GenderT } from '../types';
import { fetchProducts } from '../api/products';
import { genderByCustomerSegment } from "../utils/routeSegmentsMappings";


type Props = {
  params: Promise<{
    customerSegment: string;
  }>;
}

const homeHeaderTitles: { [key in CustomerSegmentT]: string } = {
  "women": "Women Home",
  "men": "Men Home"
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

  // ? if customerSegment not recognized then redirect to 404 ?
  // ! does it belong to layout.tsx? (404)

  // const headerTitle = getPageTitle();
  const headerTitle = customerSegment in homeHeaderTitles
    ? homeHeaderTitles[customerSegment]
    : '';

  if (headerTitle === '') { // ! encapsulated in getPageTitle()
    // TODO: logger.warn(`homeHeaderTitles dosn't have a title for customerSegment "${customerSegment}".`);
    console.log(`homeHeaderTitles dosn't have a title for customerSegment "${customerSegment}".`);
  }




  const gender: GenderT = genderByCustomerSegment[customerSegment];
  const products: ProductT[] = await fetchProducts({gender});



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

