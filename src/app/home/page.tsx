import { Header } from "@/components/header";
import { Hero1 } from "@/components/hero-1";

const pageData = {
  hero: {
    title:
      "Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!",
    description:
      "Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.",
    action: "Temukan Video Course untuk Dipelajari!",
  },
};

function Hero() {
  return (
    <Hero1>
      <div className="max-w-[920px] p-4 space-y-4 text-light-primary text-center">
        <h1 className="heading-1">{pageData.hero.title}</h1>
        <p className="body-medium">{pageData.hero.description}</p>
        <button className="btn btn--primary">{pageData.hero.action}</button>
      </div>
    </Hero1>
  );
}

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="bg-mbg-base py-7 px-5 sm:py-16 flex flex-col gap-6 sm:gap-16 overflow-hidden">
        <Hero />
      </main>
    </>
  );
}
