"use client";

import { cn } from "@/lib/utils";
import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "",
  speed = "",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="max-w-[390px] h-20px relative rounded-xl bg-[#1725544D] backdrop-blur-md flex-shrink-0 p-5"
            key={idx}
          >
            <blockquote>
              <div className="relative z-20 flex flex-row items-center">
                <span className="flex flex-col gap-0.5">
                  <h5 className="text-neutral-50">{item.name}</h5>
                  <span className="flex gap-1.5">
                    <small className="font-bold text-neutral-50">4.9</small>
                    <div className="mt-[1px] flex gap-0.5">
                      <Star size={16} color="#F59E0B" weight="fill" />
                      <Star size={16} color="#F59E0B" weight="fill" />
                      <Star size={16} color="#F59E0B" weight="fill" />
                      <Star size={16} color="#F59E0B" weight="fill" />
                      <StarHalf size={16} color="#F59E0B" weight="fill" />
                    </div>
                  </span>
                </span>
              </div>
              <small className="text-blue-400">{item.quote}</small>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
