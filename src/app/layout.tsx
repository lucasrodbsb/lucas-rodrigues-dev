import type { Metadata } from "next";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
