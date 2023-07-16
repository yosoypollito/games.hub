import "./globals.css";

import NavBar from "@/app/nav.bar";
import { dmsans } from "@/constants";

export const metadata = {
  title: "Daif | Minigames Hub",
  description: "Looking for an exciting and entertaining way to spend your free time?\nLook no further than our Minigames website, where you'll find a wide variety of games to suit all tastes and preferences."
};

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
