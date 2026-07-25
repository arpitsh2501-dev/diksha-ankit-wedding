import type { Metadata } from "next";
import "./globals.css";
import { lora } from "./fonts";


export const metadata: Metadata = {
  title: "Ankit ❤️ Diksha Wedding",
  description: "Wedding Invitation",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={lora.className}>
        {children}
      </body>
    </html>
  );
}