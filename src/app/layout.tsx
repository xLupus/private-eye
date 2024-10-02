import { Metadata } from "next";
import "@/globals.css";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: 'Private Eye',
  description: 'Serviços de investigação particular localizado no estado de São Paulo',
  keywords: [''],
  authors: {
    name: "Vinicius Souza"
  },
};

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="pt-br">
      <body className={`bg-gray-50 ${roboto.className}`}>{children}</body>
    </html>
  );
}
