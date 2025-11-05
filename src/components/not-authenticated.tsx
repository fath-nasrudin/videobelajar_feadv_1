"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionShell } from "@/components/section-shell";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function NotAuthenticated() {
  const currentPathname = usePathname();
  return (
    <div className="space-y-10">
      <Header />
      <Container className="">
        <SectionShell className="flex flex-col items-center">
          <h2 className="text-heading-5 font-semibold">Not Authenticated</h2>
          <p className="text-body-lg text-dark-secondary font-medium">
            You should login first to access this page
          </p>
          <Link href={`${ROUTES.login.path}?callback=${currentPathname}`}>
            <Button variant={"primary"}>Login</Button>
          </Link>
        </SectionShell>
      </Container>

      <Footer />
    </div>
  );
}
