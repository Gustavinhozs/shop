import Footer from "./Components/Footer.js"
import Header from "./Components/Header.js"
import Main from "./Components/Main.js"

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