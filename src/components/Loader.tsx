"use client";

import {
  useEffect,
  useState,
} from "react";

export default function Loader() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-white
        z-[99999]
        flex
        items-center
        justify-center
      "
    >
      <img
        src="/images/logo.png"
        className="
          w-40
          animate-pulse
        "
      />
    </div>
  );
}