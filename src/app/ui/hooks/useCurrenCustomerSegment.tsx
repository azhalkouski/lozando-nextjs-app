"use client"

import { usePathname } from "next/navigation";
import { CustomerSegmentKeysEnum } from '../../types'


export default function useCurrenCustomerSegment(): CustomerSegmentKeysEnum {
  const pathname = usePathname();
  const trimedSlashPathname = pathname.slice(1);
  
  if (trimedSlashPathname.startsWith(CustomerSegmentKeysEnum.women)) {
    return CustomerSegmentKeysEnum.women;
  }
  
  if (trimedSlashPathname.startsWith(CustomerSegmentKeysEnum.men)) {
    return CustomerSegmentKeysEnum.men;
  }
  
  throw new Error(`Unknown CustomerSegment in pathname: "${pathname}".
    Currently supported CustomerSegments are
    ${Object.values(CustomerSegmentKeysEnum)}`);
};
