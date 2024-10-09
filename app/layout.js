import Navbar from "../components/Navbar";
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'MiPrimeraAppNext',
  description: "My first app with Next.JS"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
