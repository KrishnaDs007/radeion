"use client";

import { useEffect, useRef, useState } from "react";

function parseMetric(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  return {
    target: match ? Number(match[1]) : 0,
    suffix: match ? match[2] : value,
  };
}

export function AnimatedCounter({ value }: { value: string }) {
  const { target, suffix } = parseMetric(value);
  const [display, setDisplay] = useState(0);
  const [settled, setSettled] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const duration = 1800;

        function frame(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setDisplay(Math.round(target * eased));

          if (progress < 1) {
            requestAnimationFrame(frame);
          } else {
            setDisplay(target);
            setSettled(true);
          }
        }

        requestAnimationFrame(frame);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={settled ? "counter-settled" : "counter-spinning"}>
      {display}
      {suffix}
    </span>
  );
}
