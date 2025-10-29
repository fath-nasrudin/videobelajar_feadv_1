"use client";
import { SectionShell } from "@/components/section-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getPaymentOptions } from "@/data/payment";

const paymentOptions = getPaymentOptions();

export function PaymentMethods({ children }: { children: React.ReactNode }) {
  return <SectionShell>{children}</SectionShell>;
}

PaymentMethods.Title = function Title({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h5 className="text-heading-5 font-semibold text-dark-primary">
      {children}
    </h5>
  );
};

PaymentMethods.List = function List() {
  return (
    <RadioGroup>
      {paymentOptions.map((item) => (
        <Accordion key={item.category} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-body-base text-dark-primary font-bold py-4 px-5 border-border border-[1px] rounded-card mb-2">
              {item.category}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {item.methods.map((method) => (
                  <li
                    key={method.code}
                    className="text-body-sm py-4 px-5 border-border border-[1px] rounded-card flex gap-2 items-center"
                  >
                    <img src={method.image.url} className="w-10 h-full" />
                    <Label htmlFor={method.code} className="w-full">
                      {method.name}
                    </Label>
                    <RadioGroupItem
                      className="ml-auto"
                      value={method.code}
                      id={method.code}
                    />
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </RadioGroup>
  );
};
