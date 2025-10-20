"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionShell } from "@/components/section-shell";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCartFill } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { RiBook2Fill } from "react-icons/ri";

const data = [
  { Icon: LuUser, text: "Profil Saya", url: "/me/profile" },
  { Icon: RiBook2Fill, text: "Kelas Saya", url: "/me/classes" },
  { Icon: BsCartFill, text: "Pesanan Saya", url: "/me/orders" },
];

export default function ProfilePage() {
  const pathname = usePathname();
  return (
    <div className="space-y-10">
      <Header />
      <Container className="flex gap-5">
        {/* left side */}
        <div className="w-[292px] space-y-5">
          <div>
            <h5 className="text-heading-5">Ubah Profil</h5>
            <p className="text-body-base text-dark-secondary">
              Ubah data diri Anda
            </p>
          </div>
          <SectionShell>
            <ul className="flex flex-col gap-4 text-body-lg font-bold text-dark-secondary">
              {data.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className={cn(
                      "p-4 flex gap-4 items-center rounded-card",

                      //   active path
                      pathname.startsWith(item.url) &&
                        " border border-secondary text-secondary bg-secondary/10"
                    )}
                  >
                    <item.Icon />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </SectionShell>
        </div>
        {/* right side */}
      </Container>

      <Footer />
    </div>
  );
}
