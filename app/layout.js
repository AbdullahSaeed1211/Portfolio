import "@styles/globals.css";
import Navbar from "@components/Nav";
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata = {
  title: "Abdullah Saeed's Porfolio",
  description:
    "Software Developer who specializes in Web Development using Next.js and popular frameworks, Libraries and tools.",
};
import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800','900'],
})
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const Rootlayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body >
      <div className="main"></div>
        <main className="app">
          <Navbar />
          {children}
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
};

export default Rootlayout;
