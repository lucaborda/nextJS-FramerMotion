import { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar";
import Transition from "./Transitions";

export const metadata: Metadata = {
  title: "Luca playing with animations",
  description: "Thx Larose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
