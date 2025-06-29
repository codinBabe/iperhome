import { motion } from "framer-motion";
import React, { HTMLAttributes, ElementType } from "react";
import { Variants } from "framer-motion";

interface MotionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variants: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  children: React.ReactNode;
}

export default function Motion({
  as: Tag = "div",
  variants,
  className = "",
  delay = 0.2,
  once = true,
  children,
  ...rest
}: MotionProps) {
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
