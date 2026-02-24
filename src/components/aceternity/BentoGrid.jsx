"use client";
import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento transition duration-200",
        "card-surface p-6 space-y-4",
        "hover:shadow-glow-sm",
        className,
      )}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <h3 className="font-display font-bold text-content-primary text-lg mt-2">
          {title}
        </h3>
        <p className="text-content-secondary text-sm mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
