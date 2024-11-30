import { ProductT, CustomerSegmentT, CustomerSegmentKeys } from '../types';

import styles from "../page.module.css";

const API_KEY = process.env.LOZANDO_REST_API_KEY;


type Props = {
  params: Promise<{
    customerSegment: string;
  }>;
}

const homeHeaderTitles: { [key in CustomerSegmentT]: string } = {
  "women": "Women Home",
  "men": "Men Home"
};


export default async function CustomerSegmentHome({ params }: Props) {
  const { customerSegment: _customerSegment } = await params;
  const customerSegment = _customerSegment.toString() as CustomerSegmentT;

  // ? if customerSegment not recognized then redirect to 404 ?

  const headerTitle = customerSegment in homeHeaderTitles
    ? homeHeaderTitles[customerSegment]
    : '';

  if (headerTitle === '') {
    // TODO: logger.warn(`homeHeaderTitles dosn't have a title for customerSegment "${customerSegment}".`);
    console.log(`homeHeaderTitles dosn't have a title for customerSegment "${customerSegment}".`);
  }




  let products: ProductT[] = [];

   try {
    // qeuryParamByCustomerSegment[customerSegment]
    let query = customerSegment === CustomerSegmentKeys.women
      ? 'gender=women'
      : 'gender=men';

    const response = await fetch(`http://localhost:3000/api/products?${query}`, {
      headers: {
        'x-api-key': API_KEY as string,
      }
    });

    products = await response.json() as ProductT[];
    } catch (e) {
      // logger.error('Failed to load resource: http://localhost:3000/api/products');
      console.log('Failed to load resource: http://localhost:3000/api/products');
    }



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

