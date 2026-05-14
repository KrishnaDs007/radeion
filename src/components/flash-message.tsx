"use client";

import { useEffect, useRef, useState } from "react";

type FlashMessageProps = {
  closeSignal?: number;
  duration?: number;
  message: string;
  onDismiss?: () => void;
  title: string;
  type: "success" | "error";
};

export function FlashMessage({ closeSignal = 0, duration = 5000, message, onDismiss, title, type }: FlashMessageProps) {
  const [isVisible, setIsVisible] = useState(true);
  const hasMounted = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration, message, title, type]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    setIsVisible(false);
  }, [closeSignal]);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const timer = window.setTimeout(() => {
      onDismiss?.();
    }, 220);

    return () => window.clearTimeout(timer);
  }, [isVisible, onDismiss]);

  return (
    <div className="flash-message" data-state={isVisible ? "open" : "closed"} data-type={type} role="status" aria-live="polite">
      <span className="flash-message-icon" aria-hidden>
        {type === "success" ? "✓" : "!"}
      </span>
      <span className="flash-message-copy">
        <strong>{title}</strong>
        <span>{message}</span>
      </span>
      <button className="flash-message-close" type="button" aria-label="Close message" onClick={() => setIsVisible(false)}>
        ×
      </button>
    </div>
  );
}
