import { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  title: 'Private Eye',
  description: 'Serviços de investigação particular localizado no estado de São Paulo',
  keywords: [''],
  authors: {
    name: "Vinicius Souza"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
