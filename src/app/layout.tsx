import type { Metadata } from "next";
import { getMetadataBase } from "@/lib/constants/site";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
