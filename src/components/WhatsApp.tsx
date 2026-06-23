import { MessageCircle } from "lucide-react";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/573001234567"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
}