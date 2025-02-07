import "locomotive-scroll/dist/locomotive-scroll.css";
import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";
import { customTheme } from "@/utils/customThemeColor";
import { Open_Sans } from "next/font/google";
import Providers from "@/lib/Providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Eco Bond",
  description: "",
};

export const open_sans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: customTheme,
        }}
      >
        <Providers>
          <body className={`antialiased ${open_sans.className}`}>
            <Toaster position="top-center" reverseOrder={false} />
            {/* <Locomotive> */}
            {children}
            {/* </Locomotive> */}
          </body>
        </Providers>
      </ConfigProvider>
    </html>
  );
}
