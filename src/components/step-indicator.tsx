"use client";
import { cn } from "@/lib/utils";
import { LuCheck } from "react-icons/lu";

type StepIndicatorProps = React.ComponentProps<"div"> & {
  steps: string[];
  currentStep: number; // start from 1
};

export function StepIndicator({
  steps,
  currentStep,
  className,
  ...props
}: StepIndicatorProps) {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const stepLabel = steps[index];
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={step} className="flex items-center">
            {/* Dot */}
            <div
              className={`
                flex items-center justify-center w-8 h-8 rounded-full border-4 text-sm font-medium
                ${
                  isCompleted
                    ? "bg-primary border-primary text-white"
                    : isActive
                    ? "border-primary text-primary"
                    : "border-dark-disabled text-dark-disabled"
                }
              `}
            >
              {isCompleted && <LuCheck />}
              {isActive && (
                <div className="w-4 h-4 rounded-full bg-primary"></div>
              )}
            </div>
            <div
              className={`
                mx-4 text-body-sm font-bold
                ${
                  isCompleted
                    ? "text-dark-secondary"
                    : isActive
                    ? "text-dark-primary"
                    : "text-dark-disabled"
                }
              `}
            >
              {stepLabel}
            </div>

            {/* Line (kecuali step terakhir) */}
            {index < steps.length - 1 && (
              <div
                className={`
                  w-4 sm:w-18 h-[3px]
                  ${isCompleted ? "bg-primary" : "bg-dark-disabled"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
