"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowCounterClockwise } from "@phosphor-icons/react";
import { useState } from "react";

const WebLink = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-4">
      <div className="space-y-0">
        <h4>Personalized Web Link</h4>
        <small>Create a custom link for your profile or leave as it is</small>
      </div>

      <div className="bg-neutral-800 rounded-3xl p-4 shadow-md space-y-2">
        <small>
          Link: <span className="text-blue-500">Available</span>
        </small>
        <div className="flex gap-2 w-full">
          <div className="flex group w-full">
            <p
              className={`flex items-center h-11 w-fit rounded-l-xl border-r-0 border bg-transparent pl-2 py-1 text-sm transition-colors ${
                isFocused
                  ? "border-blue-500 text-blue-500"
                  : "border-neutral-500 text-neutral-500"
              }`}
            >
              www.accesscard.me/
            </p>
            <div className="w-full">
              <Input
                placeholder={"placeholder"}
                defaultValue={"defaultValue"}
                className={`border-l-0 rounded-l-none pl-0 focus-visible:ring-0 ${
                  isFocused ? "border-blue-500" : ""
                }`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
          </div>

          <Button size="icon" variant="icon">
            <ArrowCounterClockwise size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WebLink;
