"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function ScrollFrameAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [loadedFrames, setLoadedFrames] = useState<Map<number, HTMLImageElement>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const totalFrames = 111; // frame_129 to frame_239
  const startFrame = 129;

  // Progressive frame loading using requestIdleCallback
  useEffect(() => {
    if (!isVisible) return;

    const loadFrame = (frameNum: number) => {
      const img = new Image();
      img.src = `/animation-frames/frame_${frameNum}.jpg`;
      
      return new Promise<HTMLImageElement>((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = () => reject(img);
      });
    };

    const loadFramesProgressively = async () => {
      // Load first 10 frames immediately for smooth start
      const initialFrames = [];
      for (let i = 0; i < 10 && i < totalFrames; i++) {
        try {
          const img = await loadFrame(startFrame + i);
          initialFrames.push(img);
        } catch (e) {
          console.error(`Failed to load frame ${startFrame + i}`);
        }
      }

      // Set initial loaded frames
      const initialMap = new Map();
      initialFrames.forEach((img, i) => initialMap.set(i, img));
      setLoadedFrames(initialMap);
      setIsLoading(false);

      // Load remaining frames in chunks during idle time
      let currentFrame = 10;
      const chunkSize = 5;

      const loadNextChunk = () => {
        if (currentFrame >= totalFrames) return;

        const chunk = [];
        for (let i = 0; i < chunkSize && currentFrame + i < totalFrames; i++) {
          chunk.push(loadFrame(startFrame + currentFrame + i));
        }

        Promise.all(chunk).then((images) => {
          setLoadedFrames((prev) => {
            const newMap = new Map(prev);
            images.forEach((img, i) => {
              if (img instanceof HTMLImageElement) {
                newMap.set(currentFrame + i, img);
              }
            });
            return newMap;
          });
          currentFrame += chunkSize;

          // Schedule next chunk
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => loadNextChunk(), { timeout: 50 });
          } else {
            setTimeout(() => loadNextChunk(), 16);
          }
        });
      };

      // Start loading remaining frames
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => loadNextChunk(), { timeout: 50 });
      } else {
        setTimeout(() => loadNextChunk(), 100);
      }
    };

    loadFramesProgressively();
  }, [isVisible]);

  // Intersection Observer to detect when animation is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: '50vh' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Optimized scroll handler with RAF
  useEffect(() => {
    if (!containerRef.current || !imageRef.current || loadedFrames.size === 0) return;

    const container = containerRef.current;
    const image = imageRef.current;
    let lastFrame = -1;
    let ticking = false;

    const updateFrame = () => {
      const containerRect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, -containerRect.top / (containerHeight - windowHeight)));
      
      // Calculate which frame to show
      const frameIndex = Math.floor(scrollProgress * (totalFrames - 1));
      
      // Only update if frame changed and frame is loaded
      if (frameIndex !== lastFrame && frameIndex >= 0 && frameIndex < totalFrames) {
        const frame = loadedFrames.get(frameIndex);
        if (frame) {
          image.src = frame.src;
          lastFrame = frameIndex;
        }
      }
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateFrame);
        ticking = true;
      }
    };

    // Use scroll event listener with passive option for Safari
    window.addEventListener('scroll', onScroll, { passive: true });
    updateFrame(); // Initial call

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [loadedFrames]);

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
            loading="eager"
          />
        )}
      </div>
    </section>
  );
}
