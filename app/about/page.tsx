import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import About from "@/components/home/about";

export default function AboutPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="py-15">
      <About />
      </div>
      <Footer />
    </div>
  );
}
