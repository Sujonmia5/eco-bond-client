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
        <body className={`antialiased ${open_sans.className}`}>
          <Providers>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
          </Providers>
        </body>
      </ConfigProvider>
    </html>
  );
}
