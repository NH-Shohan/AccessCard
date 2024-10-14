"use client";

import { Progress } from "@/components/ui/progress";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const Stepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  if (stepsConfig.length === 0) {
    return <></>;
  }

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentStep((prevStep) => {
        if (prevStep === stepsConfig.length) {
          setIsComplete(true);
          return prevStep;
        } else {
          return prevStep + 1;
        }
      });
      setTransitioning(false);
    }, 250);
  };

  const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentStep((nextStep) => {
        if (nextStep === stepsConfig[0]) {
          setIsComplete(false);
          return nextStep;
        } else {
          return nextStep - 1;
        }
      });
      setTransitioning(false);
    }, 250);
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <div className="max-w-lg mx-auto">
      <div className="relative flex justify-center">
        <div className="flex justify-between my-10 w-[360px] z-10">
          {stepsConfig.map((step, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center w-32"
            >
              <div className="border-8 border-[#1C1C1C] h-[64px] -mb-2 rounded-full">
                <div
                  className={`w-10 h-10 flex justify-center items-center rounded-full border-[4px] border-blue-950 relative ${
                    currentStep > index + 1 || isComplete ? "bg-blue-900" : ""
                  } ${
                    currentStep === index + 1
                      ? "bg-blue-600 text-blue-50"
                      : "bg-blue-300 text-blue-600"
                  }`}
                >
                  <h5>
                    {currentStep > index + 1 || isComplete ? (
                      <span className="absolute top-1.5 left-1.5">
                        <Check
                          className="mx-auto"
                          size={20}
                          color="#93c5fd"
                          weight="bold"
                        />
                      </span>
                    ) : (
                      index + 1
                    )}
                  </h5>
                </div>
              </div>
              <small
                className={`text-xs ${
                  currentStep > index + 1 || isComplete ? "text-blue-500" : ""
                } ${currentStep === index + 1 ? "text-blue-50" : ""}`}
              >
                {step.name}
              </small>
            </div>
          ))}
        </div>
        <Progress
          className="absolute top-[67px] w-[280px]"
          value={calculateProgressBarWidth()}
        />
      </div>

      <div
        style={{ opacity: transitioning ? 0 : 1, transition: "opacity 0.3s" }}
      >
        <ActiveComponent
          isComplete={isComplete}
          currentStep={currentStep}
          handlePrev={handlePrev}
          handleNext={handleNext}
          stepsConfig={stepsConfig}
        />
      </div>
    </div>
  );
};

export default Stepper;
