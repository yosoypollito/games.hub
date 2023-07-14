import "./globals.css";
import { Montserrat } from "next/font/google";

import NavBar from "@/app/nav.bar";

export const metadata = {
  title: "Daif | Games Hub",
  description: "Created by Daif with Next.js and firebase",
};

const montserrat = Montserrat({ subsets: ["latin"] });

import { dmsans } from "@/constants";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
