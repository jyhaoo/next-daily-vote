import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/QueryProvider";
import Navbar from "@/components/nav/Navbar";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-supabase-daily-vote.vercel.app/"),
  title: "Daily Vote",
  author: "jyhaoo",
  description: "Vote on daily subjects posted by members of the community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[#09090B] text-gray-200 antialiased py-10`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <main className="flex flex-col max-w-7xl mx-auto min-h-screen space-y-10 p-5">
              <Navbar />
              <div className="w-full flex-1">{children}</div>
            </main>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
