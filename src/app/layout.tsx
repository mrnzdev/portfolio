import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrtnz.dev"),
  title: "mrtnz — Software Developer",
  description:
    "Software developer focused on user experience, interface design, and performance.",
  applicationName: "mrtnz",
  authors: [{ name: "mrtnz", url: "https://mrtnz.dev" }],
  creator: "mrtnz",
  keywords: [
    "software developer",
    "full-stack developer",
    "user experience",
    "interface design",
    "web performance",
    "React",
    "TypeScript",
    "Montevideo",
    "Uruguay",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "mrtnz",
    title: "mrtnz — Software Developer",
    description:
      "Software developer building thoughtful digital products with a focus on UX, UI, and performance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "mrtnz — Software Developer",
    description:
      "Software developer building thoughtful digital products with a focus on UX, UI, and performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mrtnz.dev/#person",
      name: "mrtnz",
      url: "https://mrtnz.dev",
      jobTitle: "Software Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montevideo",
        addressCountry: "UY",
      },
      knowsAbout: [
        "Software development",
        "User experience",
        "Interface design",
        "Web performance",
        "React",
        "TypeScript",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mrtnz.dev/#website",
      url: "https://mrtnz.dev",
      name: "mrtnz",
      description:
        "Portfolio of a software developer focused on UX, UI, and performance.",
      author: { "@id": "https://mrtnz.dev/#person" },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.className} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is static, trusted structured data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
