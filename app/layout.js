import { Rubik } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "IP Address Tracker",
  description:
    "Ip Address tracking app, where you can search ip address or domain address and find where they are",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
