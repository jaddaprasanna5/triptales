
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TripTales | Explore the World",
  description:
    "Discover beautiful destinations and share your travel experiences with TripTales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
