'use client';
import React, { memo } from 'react';
import { useOptimizedImage } from '@/hooks/useOptimizedImage';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const OptimizedImage = memo(({ src, alt, className, fallbackSrc }: OptimizedImageProps) => {
  const { imageSrc, isLoading, error } = useOptimizedImage(src);

  if (isLoading) {
    return null;
  }

  if (error && fallbackSrc) {
    return <img src={fallbackSrc} alt={alt} className={className} />;
  }

  if (error) {
    return null;
  }

  return <img src={imageSrc} alt={alt} className={className} loading="lazy" />;
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
