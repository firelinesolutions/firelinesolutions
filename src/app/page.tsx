import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { WhyFireline } from "@/components/WhyFireline";
import { Process } from "@/components/Process";
import { Audience } from "@/components/Audience";
import { FinalCta } from "@/components/FinalCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 sm:pb-28">
        <Hero />
        <Problem />
        <Services />
        <WhyFireline />
        <Process />
        <Audience />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
