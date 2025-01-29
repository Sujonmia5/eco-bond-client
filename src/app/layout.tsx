import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";
import { customTheme } from "@/utils/customThemeColor";
import { Open_Sans } from "next/font/google";

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
        <body className={`antialiased ${open_sans.className}`}>{children}</body>
      </ConfigProvider>
    </html>
  );
}
