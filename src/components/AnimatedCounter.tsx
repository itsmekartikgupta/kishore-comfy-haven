import { useCallback, useEffect, useRef, useState } from "react";

export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatOptions?: Intl.NumberFormatOptions;
}

const defaultFormatter = new Intl.NumberFormat("en-US");

export const AnimatedCounter = ({
  value,
  duration = 1800,
  prefix = "",
  suffix = "",
  formatOptions,
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const hasAnimatedRef = useRef(false);

  const formatNumber = useCallback(
    (nextValue: number) => {
      if (formatOptions) {
        return new Intl.NumberFormat("en-US", formatOptions).format(nextValue);
      }
      return defaultFormatter.format(nextValue);
    },
    [formatOptions]
  );

  const animate = useCallback(() => {
    startTimeRef.current = undefined;

    const step = (timestamp: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(value * easedProgress);

      setDisplayValue(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
  }, [duration, value]);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animate();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [animate]);

  useEffect(() => {
    if (hasAnimatedRef.current && value === 0) {
      setDisplayValue(0);
    }
  }, [value]);

  return (
    <span ref={elementRef} aria-live="polite">
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
