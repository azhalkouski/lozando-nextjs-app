import Image from "next/image";
import Logo from "../../ui/components/logo";
import CustomerSegmentNav from "../../ui/components/customerSegmentNav";
import ProductCategoriesGroupsNav from "../../ui/components/productCategoriesGroupsNav";
import HeaderActionsPanel from "../../ui/components/headerActionsPanel";
import ProductsSearch from "../../ui/components/productsSearch";
import {
  ProductT,
  CustomerSegmentT,
  CustomerSegmentKeys,
  CustomerSegmentSlugT,
  CustomerSegmentSlugKeys,
} from '../../types';

import styles from "../../page.module.css";

const API_KEY = process.env.LOZANDO_REST_API_KEY;


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

  console.log('segmentSlug', segmentSlug);

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
    
    // qeuryParamBySegmentSlug[segmentSlug]
    query += segmentSlug === CustomerSegmentSlugKeys.clothing
      ? '&categoryGroup=clothing'
      : '&categoryGroup=shoes';

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
    <div className={styles.page} style={{border: '2px solid green'}}>
      <header className={styles.pageHeader}>
        <div className={styles.customerTypeSegregationNav}>
          <CustomerSegmentNav currentSegment={customerSegment} />
        </div>
        <div className={styles.headerLogo}>
          <Logo />
        </div>
        <div className={styles.headerActionsPanel}>
          <HeaderActionsPanel />
        </div>
        <div className={styles.productCategoriesGroupsNav}>
          <ProductCategoriesGroupsNav currentSegment={customerSegment} />
        </div>
        <div className={styles.productsSearch}>
          <ProductsSearch />
        </div>
      </header>

      <main className={styles.main} style={{border: '1px solid red'}}>
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

      </main>

      <footer className={styles.footer} style={{ border: '1px solid orange' }}>
        <a
          href="https://github.com/azhalkouski/lozando-nextjs-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://github.com/azhalkouski/lozando-nextjs-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://github.com/azhalkouski/lozando-nextjs-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Discover more
        </a>
      </footer>
    </div>
  );
}

