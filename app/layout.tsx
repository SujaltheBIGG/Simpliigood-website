import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

const CursorGlow = dynamic(() => import("@/components/CursorGlow"), {
  ssr: false,
  loading: () => null,
});

export const metadata: Metadata = {
  title: "SimpliiGood | Fresh-Frozen Spirulina & Food Technology",
  description:
    "SimpliiGood makes fresh-frozen spirulina cubes with no fishy taste. Found in 400+ stores. Real. Super. Food.",
  metadataBase: new URL("https://simpliigood.com"),
  openGraph: {
    title: "SimpliiGood | Fresh-Frozen Spirulina & Food Technology",
    description:
      "Fresh-frozen spirulina cubes with no fishy taste. Real. Super. Food.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Custom Franklin Gothic URW fonts are loaded via @font-face in globals.css
        */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="font-body text-spirulina-green antialiased">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
