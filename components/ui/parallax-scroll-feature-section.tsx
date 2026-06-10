'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from "@/lib/utils";
import Image from "next/image";

type ParallaxSectionData = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    reverse: boolean;
    badge?: string;
    tags?: string[];
    cta?: string;
}

type ParallaxScrollFeatureSectionProps = {
    sections: ParallaxSectionData[];
    className?: string;
}

export function ParallaxScrollFeatureSection({ sections, className }: ParallaxScrollFeatureSectionProps) {
    // Create refs and animations for each section
    const sectionRefs = sections.map(() => useRef(null));
    
    const scrollYProgress = sections.map((_, index) => {
        return useScroll({
            target: sectionRefs[index],
            offset: ["start end", "center start"]
        }).scrollYProgress;
    });

    // Create animations for each section
    const opacityContents = scrollYProgress.map(progress => 
        useTransform(progress, [0, 0.7], [0, 1])
    );
    
    const clipProgresses = scrollYProgress.map(progress => 
        useTransform(progress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
    );
    
    const translateContents = scrollYProgress.map(progress => 
        useTransform(progress, [0, 1], [-50, 0])
    );

  return (
       <div className={cn("flex flex-col", className)}>
            {sections.map((section, index) => (
                <div 
                    key={section.id}
                    ref={sectionRefs[index]} 
                    className={`min-h-[75vh] flex items-center justify-center md:gap-40 gap-20 px-6 md:px-20 ${section.reverse ? 'flex-row-reverse' : ''}`}
                >
                    <motion.div style={{ y: translateContents[index] }} className="flex-1 max-w-lg">
                        {section.badge && (
                            <p className="font-subheadline font-medium text-[13px] uppercase tracking-[0.15em] text-starburst-green mb-2">
                                {section.badge}
                            </p>
                        )}
                        <h3 className="font-card-headline font-medium text-[28px] md:text-[36px] text-spirulina-green">
                            {section.title}
                        </h3>
                        <motion.p 
                            style={{ y: translateContents[index] }} 
                            className="font-body text-[16px] leading-[1.6] text-spirulina-green/75 mt-4"
                        >
                            {section.description}
                        </motion.p>
                        {section.tags && (
                            <div className="mt-5 flex flex-wrap gap-2">
                                {section.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-[#f0f0f0] px-3 py-1 font-subheadline font-medium text-[12px] text-spirulina-green"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                    <motion.div 
                        style={{ 
                            opacity: opacityContents[index],
                            clipPath: clipProgresses[index],
                        }}
                        className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                    >
                        <Image 
                            src={section.imageUrl} 
                            alt={section.title}
                            fill
                            className="object-cover rounded-3xl"
                            sizes="(max-width: 768px) 300px, 400px"
                        />
                    </motion.div>
                </div>
            ))}
        </div>
  );
};
