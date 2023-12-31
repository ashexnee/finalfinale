import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

export const metadata = {
  title: "MoviePlay",
  description: "Created by ash_xne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* body */}
      <body>
        <Providers>
          <Header />

          <Navbar />
          {/* SearchBox */}

          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
