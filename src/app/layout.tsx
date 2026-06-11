import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://silveira-software.vercel.app"),
  title: "Silveira Software — Full Stack Developer | Automação, Fintech, iGaming",
  description:
    "Silveira Software — Desenvolvedor Full Stack Senior. Especialista em sistemas escaláveis, automação com N8N, fintechs, iGaming e server-side tracking. São Paulo, Brasil.",
  keywords: [
    "Silveira Software",
    "Full Stack Developer",
    "Automação",
    "Fintech",
    "iGaming",
    "N8N",
    "React",
    "Node.js",
    "PHP",
    "AWS",
  ],
  authors: [{ name: "Carlos Eduardo Silveira" }],
  openGraph: {
    title: "Silveira Software — Full Stack Developer",
    description:
      "Construindo sistemas que geram resultado — do zero ao scale. Performance, automação e escalabilidade.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silveira Software — Full Stack Developer",
    description:
      "Construindo sistemas que geram resultado — do zero ao scale.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Silveira Software",
  url: "https://silveira-software.vercel.app",
  description:
    "Desenvolvimento full stack, automação, fintech, iGaming e IA. Sistemas que geram resultado — do zero ao scale.",
  founder: {
    "@type": "Person",
    name: "Carlos Eduardo Silveira",
    jobTitle: "Arquiteto de Sistemas / Full Stack Developer",
    sameAs: [
      "https://github.com/Silveira-Software",
      "https://www.linkedin.com/in/carlos-eduardo-08a012394/",
      "https://instagram.com/silveirasoftware",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Desenvolvimento Full Stack",
    "Automação N8N",
    "Gateways de Pagamento",
    "iGaming",
    "Inteligência Artificial",
    "Server-Side Tracking",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-black text-white overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
