import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import MobileResponsiveHeader from "../components/Header";

export const metadata = {
  title: "Ahmed Abdullah",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profileIcon1.png" type="image/x-icon" />
      </head>
      <body>
        <MobileResponsiveHeader />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
