import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: "Ahmed Abdullah",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-MIwXJ8JZ+/E7E8KmHMBgAEAhq3fyGV+kWm2hY5X8L+VYZRiZTxFg2dDQYpjF6Hp0nF3EQ9V+kD3RLEjwXz2xUg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
          <link rel="icon" href="/profileIcon1.png" type="image/x-icon" />

      </head>
      <body>
        <header
          className="bg-white shadow-md fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6"
          style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
        >
          <div className="text-xl font-medium text-gray-800">
            <a
              href="/"
              className="text-2xl font-bold transition-colors duration-300"
            >
              Ahmed Abdullah
            </a>
          </div>
          <nav className="flex space-x-6">
            <a
              href="/"
              className="text-base font-black text-[rgb(45,46,50)] px-[10px] py-[10px] tracking-wide hover:text-blue-600 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="/#about"
              className="text-base font-bold text-[rgb(45,46,50)] px-[10px] py-[10px] tracking-wide hover:text-blue-600 transition-all duration-300"
            >
              About
            </a>
            <a
              href="/#portfolio"
              className="text-base font-bold text-[rgb(45,46,50)] px-[10px] py-[10px] tracking-wide hover:text-blue-600 transition-all duration-300"
            >
              Portfolio
            </a>

            <a
              href="/#contact"
              className="text-base font-bold text-[rgb(45,46,50)] px-[10px] py-[10px] tracking-wide hover:text-blue-600 transition-all duration-300"
            >
              Contact
            </a>
          </nav>
        </header>
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
