"use client";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { HeaderComposable } from "@/components/header";
import { SectionShell } from "@/components/section-shell";
import { StepIndicator } from "@/components/step-indicator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ROUTES } from "@/constants/routes";
import { getCourseDetail } from "@/data/courses";
import { getPaymentOptions, getPaymentSteps } from "@/data/payment";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

const courseDetail = getCourseDetail();
const paymentOptions = getPaymentOptions();

export default function PaymentSuccessPage() {
  const steps = getPaymentSteps();
  const currentStep = 3;
  const isMobile = useIsMobile();

  return (
    <div className="space-y-10">
      <HeaderComposable>
        <HeaderComposable.Brand />
        {!isMobile && <StepIndicator steps={steps} currentStep={currentStep} />}
      </HeaderComposable>

      {isMobile && <StepIndicator steps={steps} currentStep={currentStep} />}

      {/* main content */}
      <Container className="max-w-lg">
        <SectionShell className="flex flex-col items-center text-center">
          <img src={"/img/payment-success.png"} />
          <h4 className="text-heading-4 font-semibold text-dark-primary">
            Pembayaran Berhasil!
          </h4>
          <p className="text-body-lg text-dark-secondary">
            Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami
            jika ada kendala.
          </p>
          <Button variant={"primary"} className="w-full sm:w-min">
            Lihat Detail Pesanan
          </Button>
        </SectionShell>
      </Container>
    </div>
  );
}
