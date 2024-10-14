"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DotsSixVertical, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { AccordionContent } from "../ui/accordion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const LinkDragItem = ({
  id,
  website,
  name,
  index,
  handleRemoveSelectedLinks,
}) => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <AccordionContent
      ref={setNodeRef}
      {...attributes}
      style={style}
      className="touch-none"
    >
      <div className="flex items-center w-full">
        <DotsSixVertical
          {...listeners}
          size={24}
          className="text-neutral-500 cursor-grab"
        />
        <div className="flex items-center gap-2 w-full">
          <div className="flex group w-full">
            <p
              className={`flex items-center h-11 w-fit rounded-l-xl border-r-0 border bg-transparent pl-2 pt-0.5 text-sm transition-colors ${
                focusedIndex === index
                  ? "border-blue-500 text-blue-500"
                  : "border-neutral-500 text-neutral-500"
              }`}
            >
              {website}/
            </p>
            <div className="w-full">
              <Input
                placeholder={`${name?.toLowerCase()}-username`}
                className={`border-l-0 rounded-l-none pl-0 focus-visible:ring-0 ${
                  focusedIndex === index ? "border-blue-500" : ""
                }`}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
              />
            </div>
          </div>

          <Button
            size="icon"
            variant="icon"
            className="bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500"
            onClick={() => handleRemoveSelectedLinks(id)}
          >
            <Trash size={24} />
          </Button>
        </div>
      </div>
    </AccordionContent>
  );
};

export default LinkDragItem;
