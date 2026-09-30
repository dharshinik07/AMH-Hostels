import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number; // 0-indexed
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between relative">
        {/* Background Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0 rounded-full hidden sm:block"></div>
        
        {/* Progress Line */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gold z-0 rounded-full transition-all duration-500 hidden sm:block"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>

        {/* Steps */}
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <div key={index} className="flex flex-col items-center relative z-10">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm
                  ${isCompleted ? "bg-primary text-white border-2 border-primary" : 
                    isCurrent ? "bg-white text-primary border-4 border-gold shadow-md scale-110" : 
                    "bg-white text-gray-400 border-2 border-gray-200"
                  }
                `}
              >
                {isCompleted ? <Check className="w-5 h-5 text-white" /> : (index + 1)}
              </div>
              <span 
                className={`mt-3 text-xs md:text-sm font-medium absolute top-full w-24 text-center -ml-7
                  ${isCurrent ? "text-primary font-bold" : isCompleted ? "text-gray-700" : "text-gray-400"}
                `}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
