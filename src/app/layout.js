/* eslint-disable no-console, no-control-regex*/
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Provider from "@/components/Theme/Provider";

const inter = Inter({ subsets: ["latin"] });
import {Suspense} from "react";


export const metadata = {
  title: "Movie app",
  description:
    "App Name is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <Navbar />
          {children}
          <Footer />
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
