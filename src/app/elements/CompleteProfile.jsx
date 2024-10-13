"use client";

import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import { useState } from "react";
import PersonalInfo from "./forms/PersonalInfo";
import WebLink from "./forms/WebLink";

const CompleteProfile = ({
  isComplete,
  currentStep,
  handleNext,
  handlePrev,
  stepsConfig,
}) => {
  const [onClick, setOnClick] = useState(false);
  const handleClickNext = () => {
    setOnClick(true);
    console.log("====================================");
    console.log("Click is ", onClick);
    console.log("====================================");
  };

  return (
    <div className="space-y-8">
      <Divider />
      <PersonalInfo />
      <Divider />
      <WebLink />
      <Button onClick={handleClickNext} className="w-1/5 mt-3">
        Next
      </Button>
    </div>
  );
};

export default CompleteProfile;
