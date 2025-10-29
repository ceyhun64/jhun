import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Contact from "@/components/home/contact";

export default function ContactPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="py-15">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
