import Providers from "@/components/ui/Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">
        <Providers>
          {/* @ts-expect-error */}
          <Navbar />
          {/* <Toaster position="bottom-right" /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
