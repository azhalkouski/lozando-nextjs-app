import TopLevelHeader from "../ui/components/topLevelHeader";
import TopLevelFooter from "../ui/components/topLevelFooter";
import { CustomerSegmentT } from '../types';

import styles from "../page.module.css";


export default async function Layout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    customerSegment: string;
  }>;
}>) {
  const { customerSegment: _customerSegment } = await params;
  const customerSegment = _customerSegment.toString() as CustomerSegmentT;

  return (
    <div className={styles.page} style={{border: '2px solid green'}}>
      <TopLevelHeader customerSegment={customerSegment} />
      <main className={styles.main} style={{border: '1px solid red'}}>
        {children}
      </main>
      <TopLevelFooter />
    </div>
  );
}