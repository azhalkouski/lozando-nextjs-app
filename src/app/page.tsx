import { redirect } from "next/navigation";
import { CustomerSegmentRoutes } from './types';



export default async function Home() {
  redirect(CustomerSegmentRoutes.women);
}
