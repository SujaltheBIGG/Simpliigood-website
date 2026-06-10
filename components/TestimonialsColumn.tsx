"use client";
import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  direction?: "up" | "down";
}) => {
  const direction = props.direction || "up";
  const translateY = direction === "up" ? "-50%" : "0%";
  const initialY = direction === "up" ? "0%" : "-50%";
  const testimonials = direction === "down" ? [...props.testimonials].reverse() : props.testimonials;

  return (
    <div className={`h-[600px] overflow-hidden ${props.className}`}>
      <motion.div
        initial={{ translateY: initialY }}
        animate={{
          translateY,
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(4).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }: Testimonial, i: number) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full h-[280px] flex flex-col" key={i}>
                  <div className="flex-1">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
