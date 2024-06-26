/* eslint-disable no-console, no-control-regex*/
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Provider from "@/components/Theme/Provider";

const inter = Inter({ subsets: ["latin"] });
import { Suspense } from "react";

export const metadata = {
  title: "Movie app",
  description:
    "Pluto is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.",
    icons: {
      icon: "https://media.istockphoto.com/id/1306098836/vector/graceful-floral-p-letter-icon-design.jpg?s=612x612&w=0&k=20&c=BxjYIFGFVcWI0ZlSmW_rKj827n7QZCsk9agCAY-PJsc=",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Suspense
            fallback={
              <div className="h-screen w-screen flex justify-center items-center text-6xl">
                <span className="loading loading-infinity loading-lg"></span>
              </div>
            }
          >
            <Navbar />
            {children}
            <Footer />
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
