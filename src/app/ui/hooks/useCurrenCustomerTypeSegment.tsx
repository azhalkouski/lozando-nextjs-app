"use client"

import { usePathname } from "next/navigation";
import { CustomerTypeSegmentKeysEnum } from '../../types'


export default function useCurrenCustomerTypeSegment(): CustomerTypeSegmentKeysEnum {
  const pathname = usePathname();
  const trimedSlashPathname = pathname.slice(1);
  
  if (trimedSlashPathname.startsWith(CustomerTypeSegmentKeysEnum.women)) {
    return CustomerTypeSegmentKeysEnum.women;
  }
  
  if (trimedSlashPathname.startsWith(CustomerTypeSegmentKeysEnum.men)) {
    return CustomerTypeSegmentKeysEnum.men;
  }
  
  throw new Error(`Unknown CustomerTypeSegment in pathname: "${pathname}".
    Currently supported customerTypeSegments are
    ${Object.values(CustomerTypeSegmentKeysEnum)}`);
};
