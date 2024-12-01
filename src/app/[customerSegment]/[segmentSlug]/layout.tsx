import { notFound } from "next/navigation";
import { CustomerSegmentSlugT } from "@/app/types"
import { segmentSlugs } from "../../constants/routeSegments";

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    segmentSlug: CustomerSegmentSlugT;
  }>;
}>;

export default async function Layout({ params, children }: Props) {
  const { segmentSlug } = await params;

  if (!segmentSlugs.includes(segmentSlug)) {
    notFound();
  }

  return (
    <>
    {children}
    </>
  );
};
