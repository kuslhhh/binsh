import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-bricolage'
})




export const metadata: Metadata = {
  title: "Binsh",
  description: "Share Your Binsh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} antialiased bg-[#0a0a0a]`}
      >
        {children}
      </body>
    </html>
  );
}