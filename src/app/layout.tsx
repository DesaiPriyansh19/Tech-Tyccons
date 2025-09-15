import type { Metadata } from "next";

import { Inconsolata } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["400", "700"], // Optional: Define the weights you need
});



export const metadata: Metadata = {
  title: "TECH TYCOONS",
  description: "making things possible.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable} antialiased `}>
        {/* Example of global Header */}
        <header className="w-full">
               <Navbar/>
        </header>

        <main>{children}</main>

        {/* Example of global Footer */}
        <footer>
          {/* Footer component */}
        </footer>
      </body>
    </html>
  );
}

