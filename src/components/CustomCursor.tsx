"use client";

import {
  useEffect,
  useState,
} from "react";

export default function CustomCursor() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="
        hidden
        lg:block
        fixed
        w-6
        h-6
        rounded-full
        bg-[#5F1A17]
        pointer-events-none
        z-[9999]
        mix-blend-difference
      "
      style={{
        left: position.x,
        top: position.y,
        transform:
          "translate(-50%, -50%)",
      }}
    />
  );
}