import "./globals.css";

export const metadata = {
  title: "PAKWEBMASTER",
  description: "We create and launch websites for growing businesses."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
