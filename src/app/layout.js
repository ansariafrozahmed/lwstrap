import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/HeaderFooter/Header";
import AnnouncementBar from "@/components/OtherComps/AnnouncementBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leather Watch Straps",
  description: "Leather Watch Straps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnnouncementBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
