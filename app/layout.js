import "@styles/globals.css";
import Navbar from "@components/Nav";

export const metadata = {
  title: "Abdullah Saeed's Porfolio",
  description:
    "Software Developer who specializes in Web Development using MERN Stack and popular frameworks just as Next.js",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <main className="app">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
