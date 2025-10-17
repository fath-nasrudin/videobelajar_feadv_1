import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero1 } from "@/components/hero-1";

function Rating({ rating }: { rating: { average: number; count?: number } }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex gap-1 items-center">
        <img src="/img/icons/star-yellow.svg" />
        <img src="/img/icons/star-yellow.svg" />
        <img src="/img/icons/star-half.svg" />
        <img src="/img/icons/star-gray.svg" />
        <img src="/img/icons/star-gray.svg" />
      </div>
      <div className="underline underline-offset-2 text-light-secondary text-body-sm flex items-center justify-center">
        {rating.average}
        {rating.count && ` (${rating.count})`}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <Hero1>
      <div className="max-w-[920px] p-4 space-y-4 text-light-primary text-left">
        <h2 className="text-heading-2">
          Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
          Manager.
        </h2>
        <p className="text-body-base">
          Belajar bersama tutor profesional di Video Course.{" "}
          <span className="block">Kapanpun, di manapun.</span>
        </p>
        <Rating rating={{ average: 3.5, count: 86 }} />
      </div>
    </Hero1>
  );
}

export default function CourseDetailPage() {
  return (
    <>
      <Header />
      <main className="space-y-6 py-7 sm:py-16">
        <Hero />
        {/* 2 sides */}
      </main>
      <Footer />
    </>
  );
}
