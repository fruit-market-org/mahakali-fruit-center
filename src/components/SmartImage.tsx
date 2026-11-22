"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  /** Rendered in place of the photo if it fails to load. */
  fallback: ReactNode;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * A fill-mode image that swaps itself for illustrated artwork if the remote
 * photograph cannot be fetched. The parent element must be `relative`.
 */
export function SmartImage({
  src,
  alt,
  fallback,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
