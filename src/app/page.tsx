import Image from "next/image";
import styles from "./page.module.css";
import { ProductT } from './types';

const API_KEY = process.env.LOZANDO_REST_API_KEY;

export default async function Home() {
  if (!API_KEY) {
    throw new Error('API Key is not defined');
  }

  const response = await fetch('http://localhost:3000/api/products', {
    headers: {
      'x-api-key': API_KEY,
    }
  });
  const products = await response.json() as ProductT[];

  return (
    <div className={styles.page}>
      <main className={styles.main} style={{border: '1px solid yellow'}}>
        <header>
          <h1>Lozando Home</h1>
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
      <footer className={styles.footer}>
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
