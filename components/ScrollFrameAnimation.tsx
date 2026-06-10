"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollFrameAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [loadedFrames, setLoadedFrames] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load frame paths - use all frames for smoothest animation
    const framePaths = [];
    for (let i = 129; i <= 239; i++) {
      framePaths.push(`/animation-frames/frame_${i}.jpg`);
    }

    // Preload all images
    const images: HTMLImageElement[] = [];
    let loaded = 0;
    let errors = 0;

    framePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        loaded++;
        if (loaded + errors === framePaths.length) {
          setLoadedFrames(images);
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        errors++;
        if (loaded + errors === framePaths.length) {
          setLoadedFrames(images);
          setIsLoading(false);
        }
      };
      images.push(img);
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || loadedFrames.length === 0 || isLoading) return;

    const container = containerRef.current;
    const image = imageRef.current;

    // Set initial image
    image.src = loadedFrames[0].src;

    let lastFrame = -1;

    const updateFrame = () => {
      const containerRect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, -containerRect.top / (containerHeight - windowHeight)));
      
      // Calculate which frame to show
      const frameIndex = Math.floor(scrollProgress * (loadedFrames.length - 1));
      
      // Only update if frame changed
      if (frameIndex !== lastFrame && frameIndex >= 0 && frameIndex < loadedFrames.length) {
        image.src = loadedFrames[frameIndex].src;
        lastFrame = frameIndex;
      }
    };

    // Use scroll event listener
    window.addEventListener('scroll', updateFrame, { passive: true });
    updateFrame(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateFrame);
    };
  }, [loadedFrames, isLoading]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-black"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {isLoading ? (
          <div className="text-white text-xl">Loading animation...</div>
        ) : (
          <img
            ref={imageRef}
            alt="Spirulina animation"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </section>
  );
}
