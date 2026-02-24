"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "../../lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  renderItem,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  const getSpeed = useCallback(() => {
    if (speed === "fast") return "20s";
    if (speed === "slow") return "60s";
    return "40s";
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
      containerRef.current.style.setProperty(
        "--animation-duration",
        getSpeed(),
      );
      setStart(true);
    }
  }, [direction, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex-shrink-0">
            {renderItem ? (
              renderItem(item, idx)
            ) : (
              <div className="card-surface px-8 py-6 w-[350px] max-w-full">
                <p className="text-content-secondary text-sm leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-dim flex items-center justify-center text-xs font-semibold text-content-primary">
                    {item.name?.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-content-primary">
                      {item.name}
                    </p>
                    <p className="text-xs text-content-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
