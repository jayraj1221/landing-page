'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface SmoothImageProps extends ImageProps {
  showSkeleton?: boolean;
}

export default function SmoothImage({
  className = '',
  showSkeleton = true,
  onLoad,
  priority = false,
  sizes,
  alt,
  ...props
}: SmoothImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // If the image is already cached or pre-decoded before hydration
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, []);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  return (
    <>
      {showSkeleton && (
        <div
          className={`absolute inset-0 bg-parchment-200/80 animate-pulse pointer-events-none transition-opacity duration-700 ease-out z-0 ${
            isLoaded || priority ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />
      )}
      <Image
        ref={imgRef}
        alt={alt}
        priority={priority}
        decoding="async"
        sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
        onLoad={handleLoad}
        className={`transition-opacity duration-700 ease-out will-change-[opacity] ${
          isLoaded || priority
            ? 'opacity-100'
            : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </>
  );
}
