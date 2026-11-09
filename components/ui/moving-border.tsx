"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type MovingButtonProps<T extends React.ElementType> = {
  borderRadius?: string;
  children: React.ReactNode;
  as?: T;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Button<T extends React.ElementType = "button">({
  borderRadius = "1.75rem",
  children,
  as,
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: MovingButtonProps<T>) {
  const Component = as || "button";
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl  h-16 w-40 p-px overflow-hidden ",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-80 bg-[radial-gradient(var(--color-sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/80 border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: Omit<React.SVGProps<SVGSVGElement>, "children" | "ref"> & {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const reducedMotion = useReducedMotion();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    if (reducedMotion || duration <= 0) return;
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export function MovingBorderFrame({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative", className)}>
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] p-0.5"
        style={{
          maskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
          maskClip: "content-box, border-box",
          maskComposite: "exclude",
        }}
      >
        <MovingBorder duration={5000} rx="12" ry="12">
          <div className="h-40 w-40 bg-[radial-gradient(var(--primary)_20%,#38bdf8_40%,transparent_70%)]" />
        </MovingBorder>
      </div>
    </div>
  );
}
