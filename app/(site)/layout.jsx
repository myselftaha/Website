import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SiteLayout({ children }) {
  return (
    <div className="page">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
