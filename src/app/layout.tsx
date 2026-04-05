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
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
