import Image from "next/image";
import Logo from "../ui/components/logo";
import CustomerTypeSegregationNav from "../ui/components/customerTypeSegregationNav";
import ProductCategoriesGroupsNav from "../ui/components/productCategoriesGroupsNav";
import HeaderActionsPanel from "../ui/components/headerActionsPanel";
import ProductsSearch from "../ui/components/productsSearch";
import { ProductT } from '../types';

import styles from "../page.module.css";

const API_KEY = process.env.LOZANDO_REST_API_KEY;


type Props = {
  params: Promise<{
    customerSpecificHome: string;
  }>;
}

const headerTitles = {
  "women-home": "Women Home",
  "men-home": "Men Home"
} as { [key: string]: string };


export default async function CustomerSpecificHome({ params }: Props) {
  const { customerSpecificHome } = await params;
  const pageSlug = customerSpecificHome.toString();

  const headerTitle = pageSlug in headerTitles
    ? headerTitles[pageSlug]
    : '';

  if (headerTitle === '') {
    // TODO: logger.warn(`HeaderTitles don't have a title for pageSlug "${pageSlug}".`);
  }

  let products: ProductT[] = [];
  const response = await fetch('http://localhost:3000/api/products', {
    headers: {
      'x-api-key': API_KEY as string,
    }
  });

  if (response.ok) {
    products = await response.json() as ProductT[];
  } else {
    // logger.error('Failed to load resource: http://localhost:3000/api/products');
  }

  return (
    <div className={styles.page} style={{border: '2px solid green'}}>
      <header className={styles.pageHeader}>
        <div className={styles.customerTypeSegregationNav}>
          <CustomerTypeSegregationNav />
        </div>
        <div className={styles.headerLogo}>
          <Logo />
        </div>
        <div className={styles.headerActionsPanel}>
          <HeaderActionsPanel />
        </div>
        <div className={styles.productCategoriesGroupsNav}>
          <ProductCategoriesGroupsNav />
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
          {products.map(({id, modelName, color, size, price}) => (
            <div key={id}>
              <p>{modelName} {color} {size} ${price}</p>
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

