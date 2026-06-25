"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/573188273153"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-8
        right-8
        z-50
        flex
        items-center
        gap-3
        bg-[#25D366]
        text-white
        px-5
        py-4
        rounded-full
        shadow-2xl
        hover:scale-105
        transition
        animate-pulse
      "
    >
      <MessageCircle size={24} />
      <span className="hidden md:block font-semibold">
        Hablemos
      </span>
    </a>
  );
}