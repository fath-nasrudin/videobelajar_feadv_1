import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const getNavLinks = () => [
  {
    text: "Kategori",
    items: [
      {
        text: "Digital & Teknologi",
        url: "#",
      },
      {
        text: "Pemasaran",
        url: "#",
      },
      {
        text: "Manajemen Bisnis",
        url: "#",
      },
      {
        text: "Pengembangan Diri",
        url: "#",
      },
      {
        text: "Desain",
        url: "#",
      },
    ],
  },
  {
    text: "Produk",
    items: [
      {
        text: "Digital & Teknologi",
        url: "#",
      },
      {
        text: "Manajemen Bisnis",
        url: "#",
      },
      {
        text: "Pengembangan Diri",
        url: "#",
      },
      {
        text: "Desain",
        url: "#",
      },
    ],
  },
  {
    text: "Pemasaran",
    items: [
      {
        text: "",
        url: "#",
      },
      {
        text: "Manajemen Bisnis",
        url: "#",
      },
      {
        text: "Pengembangan Diri",
        url: "#",
      },
      {
        text: "Desain",
        url: "#",
      },
    ],
  },
];

export function Footer() {
  const navLinks = getNavLinks();
  return (
    <footer className="border-t border-border bg-card py-12 p-4">
      <div className="mx-auto w-full max-w-[1200px] px-4 flex flex-col gap-8">
        <div className="">
          {/* <!-- Line 1 --> */}
          <div className="flex flex-col sm:flex-row gap-6 sm:justify-between">
            {/* <!-- l1c1 --> */}
            <div className="max-w-[352px] space-y-8">
              {/* <!-- brand --> */}
              <img src="/img/logo.png" className="h-7" />
              {/* <!-- info --> */}
              <div>
                {/* <!-- tagline --> */}
                <p className="text-body-base font-bold text-dark-primary">
                  Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                </p>
                {/* <!-- address --> */}
                <p className="text-body-base text-dark-primary">
                  Jl. Usman Effendi No. 50 Lowokwaru, Malang
                </p>
                {/* <!-- phone number --> */}
                <p className="text-body-base text-dark-primary">
                  +62-877-7123-1234
                </p>
              </div>
            </div>
            {/* <!-- Nav l1c2--> */}
            {/* <!-- nav desktop --> */}
            <nav className="hidden sm:flex text-body-base gap-6 text-dark-secondary">
              {navLinks.map((item) => (
                <ul key={item.text} className="space-y-1.5">
                  <li className="text-dark-primary">{item.text}</li>
                  {item.items.map((subitem) => (
                    <li key={subitem.text}>
                      <a href={subitem.url}>{subitem.text}</a>
                    </li>
                  ))}
                </ul>
              ))}
              {/* <!-- 3 sections --> */}
            </nav>
            {/* <!-- nav mobile --> */}
            <nav className="flex sm:hidden flex-col">
              {navLinks.map((item, i) => (
                <Accordion key={item.text} type="single" collapsible>
                  <AccordionItem value={`value-${i}`}>
                    <AccordionTrigger>
                      <h6 className="text-body-lg font-bold ">{item.text}</h6>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className=" px-2 space-y-2">
                        {item.items.map((subitem) => (
                          <li key={subitem.text}>
                            <a href={subitem.url}>{subitem.text}</a>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </nav>
          </div>
        </div>
        <div className="w-full border-b border-border"></div>

        {/* <!-- footer l3 --> */}
        <div className="flex gap-4 text-body-lg font-medium justify-between flex-col-reverse sm:flex-row">
          <span className="text-dark-secondary">
            @2025 Gerobak Sayur All Rights Reserved.
          </span>
          <nav className="flex gap-4">
            <a
              href="linkedin.com"
              className="h-8 aspect-square border rounded-full flex items-center justify-center"
            >
              <img src="/img/linkedin.svg" className="w-3/5" />
            </a>
            <a
              href="facebook.com"
              className="h-8 aspect-square border rounded-full flex items-center justify-center"
            >
              <img src="/img/facebook.svg" className="w-3/5" />
            </a>
            <a
              href="instagram.com"
              className="h-8 aspect-square border rounded-full flex items-center justify-center"
            >
              <img src="/img/instagram.svg" className="w-3/5" />
            </a>
            <a
              href="x.com"
              className="h-8 aspect-square border rounded-full flex items-center justify-center"
            >
              <img src="/img/twitter.svg" className="w-3/5" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
