import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAM | Lioran API Marketplace",
  description:
    "India-first API marketplace for discovering, monetizing, and consuming APIs with wallet billing, access control, and SDK-first integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const stored = localStorage.getItem("lam-theme");
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = stored ?? (systemDark ? "dark" : "light");
                document.documentElement.classList.toggle("dark", theme === "dark");
                document.documentElement.style.colorScheme = theme;
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
