"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_KEY || ""}
        config={{
          // Customize Privy's appearance in your app
          appearance: {
            theme: "dark",
            accentColor: "#676FFF",
            logo: "/svg/logo.svg",
          },
          // Create embedded wallets for users who don't have a wallet
          embeddedWallets: {
            createOnLogin: "users-without-wallets",
          },
        }}
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* NavBar */}
          <Navbar />
          {children}
        </body>
      </PrivyProvider>
    </html>
  );
}
