"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Head from "next/head";

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
      <Head>
        {/* Nom du site */}
        <title>HTTP3HOST</title>
        {/* Description */}
        <meta
          name="description"
          content="HTTP3HOST offre des solutions d'hébergement web rapides, sécurisées et optimisées, utilisant la technologie HTTP/3 pour une expérience de navigation plus fluide et une connectivité améliorée."
        />
        {/* Icône du site (favicon) */}
        <link rel="icon" href="/svg/logo.svg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
          {/* NavBar */}
          <Navbar />
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
