import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeCrew Studio | Web & App Development",
  description:
    "CodeCrew Studio helps startups and final-year students build modern web and mobile applications.",
  openGraph: {
    title: "CodeCrew Studio | Web & App Development",
    description:
      "We build scalable web & mobile apps for startups and students.",
    url: "https://codecrewstudio.in",
    siteName: "CodeCrew Studio",
    images: [
      {
        url: "https://codecrewstudio.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeCrew Studio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
