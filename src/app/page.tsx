import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import PlugTypesSection from "@/components/PlugTypesSection";
import DatabaseError from "@/components/DatabaseError";
import QuickFacts from "@/components/QuickFacts";
import FAQ from "@/components/FAQ";
import SourcesEvidence from "@/components/SourcesEvidence";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Header />
        <PlugTypesSection />
        <DatabaseError />
        <QuickFacts />
        <FAQ />
        <SourcesEvidence />
      </main>
      <Footer />
    </>
  );
}
