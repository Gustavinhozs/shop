import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import Main from "./components/Main.js"

export const metadata = {
  title: "Px store"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />  
        <Main />
        {children}
        <Footer />
        </body>
    </html>
  );
}