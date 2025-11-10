import Navbar from "@/components/layout/navbar";
import ProjectDetail from "@/components/projects/projectDetail";
import Footer from "@/components/layout/footer";

type Props = {
  params: { locale: "tr" | "en" };
};

export default function ProjectDetailPage({ params }: Props) {
  const { locale } = params; // await kaldırıldı
  return (
    <div className="bg-black">
      <Navbar locale={locale} />
      <ProjectDetail locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}
